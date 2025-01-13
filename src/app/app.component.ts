import { Component, EventEmitter, output } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MOHUA';

  isSideNavCollapsed = false;
  screenWidth = 0;
// isSideNavCollapsed: boolean;

  // @output onToggleSideNav = new EventEmitter<string>();

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
