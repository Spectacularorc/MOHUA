import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-travel-management-schedular',
  standalone: false,
  
  templateUrl: './travel-management-schedular.component.html',
  styleUrl: './travel-management-schedular.component.scss'
})
export class TravelManagementSchedularComponent {
  selectedDate: Date | null = null;
  events: { date: string, time: string, details: string, title: string }[] = [];
  newEvent = { time: '', details: '', title: '' };

  // Add event to selected date
  addEvent() {
    if (this.selectedDate && this.newEvent.time && this.newEvent.details && this.newEvent.title) {
      const eventDate = this.selectedDate.toISOString().split('T')[0];  // Format date as YYYY-MM-DD
      const newEvent = {
        date: eventDate,
        time: this.newEvent.time,
        details: this.newEvent.details,
        title: this.newEvent.title

      };
      this.events.push(newEvent);
      this.newEvent = { time: '', details: '', title: '' }; // Reset form
    } else {
      alert('Please select a date and fill in the event details.');
    }
  }

  // Get events for the selected date
  getEventsForDate(date: Date): { time: string, details: string, title: string }[] {
    const formattedDate = date.toISOString().split('T')[0]; // Format selected date to YYYY-MM-DD
    return this.events.filter(event => event.date === formattedDate);
  }

}

