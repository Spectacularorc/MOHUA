import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-travel-management-schedular',
  standalone: false,
  
  templateUrl: './travel-management-schedular.component.html',
  styleUrl: './travel-management-schedular.component.scss'
})
export class TravelManagementSchedularComponent {
  travelForm: FormGroup;
  travelRecords: any[] = [];

  constructor(private fb: FormBuilder) {
    this.travelForm = this.fb.group({
      eventTitle: ['', Validators.required],
      flightDetails: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      eventDetails: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadRecordsFromLocalStorage();
  }

  onSubmit(): void {
    const formData = this.travelForm.value;
    this.travelRecords.push(formData);
    this.saveRecordsToLocalStorage();
    this.travelForm.reset();
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

  clearLocalStorage() {
    localStorage.clear();
    console.log('Local storage cleared!');
  }

}

