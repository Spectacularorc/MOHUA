import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  user = { username: '', email: '', password: '' };

  constructor(private router: Router) {}

  register() {
    // Save user details to localStorage for simplicity
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Registration successful!');
    this.router.navigate(['/login']); // Redirect to login page
}

LogIn() {
  this.router.navigate(['/login']);
}

}
