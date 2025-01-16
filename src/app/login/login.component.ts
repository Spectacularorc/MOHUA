import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private router: Router) {}

  login() {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (
        user.username === this.loginData.username &&
        user.password === this.loginData.password
      ) {
        alert('Login successful!');
        this.router.navigate(['/dashboard']); // Redirect to dashboard
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('No registered user found. Please register first.');
    }
  }

  registration() {
    this.router.navigate(['/registration']);
}
}
