import { Component } from '@angular/core';

@Component({
  selector: 'app-right-section-appointment',
  standalone: false,
  
  templateUrl: './right-section-appointment.component.html',
  styleUrl: './right-section-appointment.component.scss'
})
export class RightSectionAppointmentComponent {
  // visitor = { name: '', mobile: '', vehicle: '', date: '', fromTime: '', toTime: '', gate: '' };
  // visitorsList: any[] = [];

  // constructor() {
  //   this.loadVisitors();
  // }

  // // Check if new visit conflicts with existing ones
  

  

  // // Load visitors from Local Storage
  // loadVisitors() {
  //   const storedVisitors = localStorage.getItem('visitors');
  //   if (storedVisitors) {
  //     this.visitorsList = JSON.parse(storedVisitors);
  //   }
  // }

  // // Delete a visit
  // deleteVisit(index: number) {
  //   this.visitorsList.splice(index, 1);
  //   localStorage.setItem('visitors', JSON.stringify(this.visitorsList));
  // }

  // // Reset form
  // resetForm() {
  //   this.visitor = { name: '', mobile: '', vehicle: '', date: '', fromTime: '', toTime: '', gate: '' };
  // }
}

