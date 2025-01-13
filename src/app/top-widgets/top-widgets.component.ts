import { Component } from '@angular/core';
import { faDashboard,
  faRectangleList,
  faShop,
  faChartBar,
  faMoneyBill,
  faLock,
  faBell,
  faLockOpen
  
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: false,
  
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
  export class TopWidgetsComponent {
    faRectangleList = faRectangleList;
    faShop = faShop;
    faChartBar = faChartBar;
    faMoneyBill=faMoneyBill;
  
  }


