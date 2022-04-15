import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
