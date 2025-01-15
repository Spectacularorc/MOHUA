import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DakManagementComponent } from './dak-management/dak-management.component';
import { TravelManagementComponent } from './travel-management/travel-management.component';
import { ReportsAndAnalysisComponent } from './reports-and-analysis/reports-and-analysis.component';
import { SecurityAndAccessibilityComponent } from './security-and-accessibility/security-and-accessibility.component';
import { NotificationComponent } from './notification/notification.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { Top3ProductsComponent } from './top-3-products/top-3-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { LeftSectionAppointmentComponent } from './left-section-appointment/left-section-appointment.component';
import { RightSectionAppointmentComponent } from './right-section-appointment/right-section-appointment.component';
import { DakManagementOutwardComponent } from './dak-management-outward/dak-management-outward.component';
import { TravelManagementSchedularComponent } from './travel-management-schedular/travel-management-schedular.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    AppointmentComponent,
    DakManagementComponent,
    TravelManagementComponent,
    ReportsAndAnalysisComponent,
    SecurityAndAccessibilityComponent,
    NotificationComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    Top3ProductsComponent,
    LeftSectionAppointmentComponent,
    RightSectionAppointmentComponent,
    DakManagementOutwardComponent,
    TravelManagementSchedularComponent,
    LoginComponent,
    RegistrationComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule
  

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
