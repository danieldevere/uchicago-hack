import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatButtonModule,
//   MatFormFieldModule,
//   MatOptionModule
// } from '@angular/material';
import { AppRoutes } from './routes';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { EmsComponent } from './ems/ems.component';
import { RouterModule, Router } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { WitnessComponent } from './witness/witness.component';
import { PatientService } from './patient.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmsComponent,
    DoctorComponent,
    WitnessComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // MatButtonModule,
    // MatOptionModule,
    // MatFormFieldModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
