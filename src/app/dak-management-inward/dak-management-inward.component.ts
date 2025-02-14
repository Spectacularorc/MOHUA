import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dak-management-inward',
  standalone: false,
  
  templateUrl: './dak-management-inward.component.html',
  styleUrl: './dak-management-inward.component.scss'
})
export class DakManagementInwardComponent {
  constructor(private router: Router) {}
  
    goToMain() {
      this.router.navigate(['/dak-management']);
  }
  formData = { name: '', date: '', type: '' , subject: '' , organisation: '' };
  storedData: { name: string; date: string; type: string; subject: string; organisation: string;  }[] = [];
  
  ngOnInit(): void {
    this.loadStoredData(); // Load data from local storage on initialization
  }
  
  onSubmit() {
    if (this.formData.name && this.formData.date && this.formData.type && this.formData.subject && this.formData.organisation) {
      // Add new form data to storedData array
      this.storedData.push({ ...this.formData });
  
      // Save the updated array to local storage
      localStorage.setItem('formData', JSON.stringify(this.storedData));
  
      // Reset the form
      this.formData = { name: '', date: '', type: '' , subject: '' , organisation: '' };
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
  

