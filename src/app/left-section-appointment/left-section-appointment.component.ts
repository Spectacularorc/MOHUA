import { Component } from '@angular/core';


@Component({
  selector: 'app-left-section-appointment',
  standalone: false,
  
  templateUrl: './left-section-appointment.component.html',
  styleUrl: './left-section-appointment.component.scss'
})
export class LeftSectionAppointmentComponent {
  visitor = { name: '', mobile: '', vehicle: '', date: '', fromTime: '', toTime: '', gate: '' };
  visitorsList: any[] = [];

  constructor() {
    this.loadVisitors();
  }

  // Check if new visit conflicts with existing ones
  isTimeConflict(newVisit: any): boolean {
    return this.visitorsList.some(existingVisit => {
      return (
        existingVisit.date === newVisit.date &&
        ((newVisit.fromTime >= existingVisit.fromTime && newVisit.fromTime < existingVisit.toTime) ||
         (newVisit.toTime > existingVisit.fromTime && newVisit.toTime <= existingVisit.toTime) ||
         (newVisit.fromTime <= existingVisit.fromTime && newVisit.toTime >= existingVisit.toTime))
      );
    });
  }

  // Save visit to Local Storage
  scheduleVisit(event: Event) {
    event.preventDefault();

    if (!this.visitor.name || !this.visitor.mobile || !this.visitor.vehicle || !this.visitor.date || !this.visitor.fromTime || !this.visitor.toTime || !this.visitor.gate) {
      alert("Please fill all fields!");
      return;
    }

    if (this.visitor.fromTime >= this.visitor.toTime) {
      alert("Invalid time range: From Time must be before To Time!");
      return;
    }

    if (this.isTimeConflict(this.visitor)) {
      alert("Time slot is already booked! Please choose a different time.");
      return;
    }

    this.visitorsList.push({ ...this.visitor });
    localStorage.setItem('visitors', JSON.stringify(this.visitorsList));
    
    this.resetForm();
  }

  // Load visitors from Local Storage
  loadVisitors() {
    const storedVisitors = localStorage.getItem('visitors');
    if (storedVisitors) {
      this.visitorsList = JSON.parse(storedVisitors);
    }
  }

  // Delete a visit
  deleteVisit(index: number) {
    this.visitorsList.splice(index, 1);
    localStorage.setItem('visitors', JSON.stringify(this.visitorsList));
  }

  // Reset form
  resetForm() {
    this.visitor = { name: '', mobile: '', vehicle: '', date: '', fromTime: '', toTime: '', gate: '' };
  }
}