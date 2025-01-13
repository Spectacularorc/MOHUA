import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-management',
  standalone: false,
  
  templateUrl: './travel-management.component.html',
  styleUrl: './travel-management.component.scss'
})
export class TravelManagementComponent implements OnInit{
  states: string[] = [
    'Andhra Pradesh',
    'Assam',
    'Bihar',
    'Gujarat',
    'Karnataka',
    'Tamil Nadu',
  ];
  
  district: { [key: string]: string[] } = {
    'Andhra Pradesh': ['Anantapur', 'Chittoor', 'Guntur', 'Kadapa', 'Kurnool'],
    Assam: ['Dibrugarh', 'Guwahati', 'Jorhat', 'Silchar', 'Tezpur'],
    Bihar: ['Araria', 'Bhagalpur', 'Gaya', 'Patna', 'Purnia'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
    Karnataka: ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Shivamogga'],
    'Tamil Nadu': [
      'Chennai',
      'Coimbatore',
      'Madurai',
      'Salem',
      'Tiruchirappalli',
    ],
  };
  
  State: string | null = null;
  districts: string[] = [];
  District: string | null = null;
  // router: any;
  
  onStateChange() {
    this.districts = this.district[this.State!] || [];
    this.District = null; // Reset district selection
  }
  
  travelData = {
    date: '',
    state: '',
    district: '',
    time: '',
    activity: '',
    modeOfTravel: '',
  };
  
  travelRecords: any[] = [];

  ngOnInit(): void {
    this.loadRecordsFromLocalStorage();
  }

  onSubmit(): void {
    this.travelRecords.push({ ...this.travelData });
    this.saveRecordsToLocalStorage();
    this.resetForm();
  }

  saveRecordsToLocalStorage(): void {
    localStorage.setItem('travelRecords', JSON.stringify(this.travelRecords));
  }

  loadRecordsFromLocalStorage(): void {
    const records = localStorage.getItem('travelRecords');
    if (records) {
      this.travelRecords = JSON.parse(records);
    }
  }

  resetForm(): void {
    this.travelData = {
      date: '',
      state: '',
      district: '',
      time: '',
      activity: '',
      modeOfTravel: '',
    };
  }

  clearLocalStorage() {
    localStorage.clear();
    console.log('Local storage cleared!');
  }
  
  // clearSpecificItem(key: string) {
  //   localStorage.removeItem(key);
  //   console.log(`Item with key "${key}" removed from local storage.`);
  // }

  constructor(private router: Router) {}

  goToSchedular() {
    this.router.navigate(['/travel-management-schedular']);
}
  
}
