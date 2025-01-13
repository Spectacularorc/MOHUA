import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dak-management-outward',
  standalone: false,
  
  templateUrl: './dak-management-outward.component.html',
  styleUrl: './dak-management-outward.component.scss'
})
export class DakManagementOutwardComponent {
   constructor(private router: Router) {}
  
    goToIn() {
      this.router.navigate(['/dak-management']);
  }

  formData = { name: '', designation: '', date: '' , type: '' , to: '' , organisation: '' , letterNo: ''};
  storedData: { name: string; designation: string; date: string; type: string; to: string; organisation: string; letterNo: string }[] = [];

  ngOnInit(): void {
    this.loadStoredData(); // Load data from local storage on initialization
  }

  onSubmit() {
    if (this.formData.name && this.formData.designation && this.formData.date && this.formData.type && this.formData.to && this.formData.organisation && this.formData.letterNo) {
      // Add new form data to storedData array
      this.storedData.push({ ...this.formData });

      // Save the updated array to local storage
      localStorage.setItem('formData', JSON.stringify(this.storedData));

      // Reset the form
      this.formData = { name: '', designation: '', date: '' , type: '' , to: '' , organisation: '' , letterNo: '' };
    }
  }

  loadStoredData() {
    const data = localStorage.getItem('formData');
    this.storedData = data ? JSON.parse(data) : [];
  }

  clearLocalStorage() {
    localStorage.clear();
    console.log('Local storage cleared!');
  }

  // clearSpecificItem(key: string) {
  //   localStorage.removeItem(key);
  //   console.log(`Item with key "${key}" removed from local storage.`);
  // }

}
