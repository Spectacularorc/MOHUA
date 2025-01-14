import { Component } from '@angular/core';

@Component({
  selector: 'app-right-section-appointment',
  standalone: false,
  
  templateUrl: './right-section-appointment.component.html',
  styleUrl: './right-section-appointment.component.scss'
})
export class RightSectionAppointmentComponent {
  selectedDate: Date | null = null;
  events: { date: string, time: string, mobile: string, name: string }[] = [];
  newEvent = { time: '', mobile: '', name: '' };

  // Add event to selected date
  addEvent() {
    if (this.selectedDate && this.newEvent.time && this.newEvent.mobile && this.newEvent.name) {
      const eventDate = this.selectedDate.toISOString().split('T')[0];  // Format date as YYYY-MM-DD
      const newEvent = {
        date: eventDate,
        time: this.newEvent.time,
        mobile: this.newEvent.mobile,
        name: this.newEvent.name

      };
      this.events.push(newEvent);
      this.newEvent = { time: '', mobile: '', name: '' }; // Reset form
    } else {
      alert('Please select a date and fill in the event details.');
    }
  }

  // Get events for the selected date
  getEventsForDate(date: Date): { time: string, mobile: string, name: string }[] {
    const formattedDate = date.toISOString().split('T')[0]; // Format selected date to YYYY-MM-DD
    return this.events.filter(event => event.date === formattedDate);
  }
}
