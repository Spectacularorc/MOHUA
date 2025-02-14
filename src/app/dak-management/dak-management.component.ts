import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dak-management',
  standalone: false,
  
  templateUrl: './dak-management.component.html',
  styleUrl: './dak-management.component.scss'
})
export class DakManagementComponent {
  constructor(private router: Router) {}

  goToOut() {
    this.router.navigate(['/dak-management-outward']);
  }
  goToIn() {
    this.router.navigate(['/dak-management-inward']);
  }


// clearSpecificItem(key: string) {
//   localStorage.removeItem(key);
//   console.log(`Item with key "${key}" removed from local storage.`);
// }

}
