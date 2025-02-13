import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
// import { navbarData } from './nav-data';
import { trigger, state, style, transition, animate } from '@angular/animations';

// interface SideNavToggle {
//   screenWidth: number;
//   collapsed: boolean;
// }

@Component({
  selector: 'app-sidenav',
  standalone: false,
  
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{

  menuItems = [
    { name: 'Dashboard', icon: 'fal fa-home', link: '/dashboard' },
    { name: 'Appointment', icon: 'fal fa-calendar-check', link: '/appointment' },
    { name: 'Dak Management', icon: 'fal fa-folder', link: '/dak-management' },
    { name: 'Travel Management', icon: 'fal fa-tags', link: '/travel-management' },
    { name: 'Reports & Analytics', icon: 'fal fa-file', link: '/reports' },
    { name: 'Security & Accessibility', icon: 'fas fa-shield-alt', link: '/security' },
    { name: 'Notifications', icon: 'fal fa-bell', link: '/notifications' }
  ];

[x: string]: any;
  username: string = '';
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  logout() {

    const confirmed = confirm('Are you sure you want to logout?');
    if (confirmed) {
      this.router.navigate(['/login']); // Redirect to login page
      alert('You have been logged out.');
    }
  }




  
  


  // logout() {
  //   localStorage.removeItem('username');
  //   this.router.navigate(['/login']);
  // }
}



    // @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
    // collapsed = false;
    // screenWidth = 0;
    // navData = navbarData;

    // @HostListener('window:resize', ['$event'])
    // onResize(event: any){
    //   this.screenWidth = window.innerWidth;
    //   if(this.screenWidth<=768){
    //     this.collapsed = false;
    //     this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
    //   }
    // }

    // ngOnInit(): void {
    //     this.screenWidth = window.innerWidth;
    // }

    // toggleCollapse(): void{
    //   this.collapsed = !this.collapsed;
    //   this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
    // }

    // closeSidenav(): void{
    //   this.collapsed = false
    //   this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
    // }

