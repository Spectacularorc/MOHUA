import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DakManagementComponent } from './dak-management/dak-management.component';
import { TravelManagementComponent } from './travel-management/travel-management.component';
import { ReportsAndAnalysisComponent } from './reports-and-analysis/reports-and-analysis.component';
import { SecurityAndAccessibilityComponent } from './security-and-accessibility/security-and-accessibility.component';
import { NotificationComponent } from './notification/notification.component';
import { DakManagementOutwardComponent } from './dak-management-outward/dak-management-outward.component';
import { TravelManagementSchedularComponent } from './travel-management-schedular/travel-management-schedular.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'dak-management', component: DakManagementComponent},
  {path: 'travel-management', component: TravelManagementComponent},
  {path: 'reports-and-analytics', component: ReportsAndAnalysisComponent},
  {path: 'security-accessibility', component: SecurityAndAccessibilityComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'dak-management-outward', component: DakManagementOutwardComponent},
  {path: 'travel-management-schedular', component: TravelManagementSchedularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
