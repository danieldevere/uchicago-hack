import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AppRoutes } from './routes';
import { AppComponent } from './app.component';
import { EmsComponent } from './ems/ems.component';
import { RouterModule, Router } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { WitnessComponent } from './witness/witness.component';

@NgModule({
  declarations: [
    AppComponent,
    EmsComponent,
    DoctorComponent,
    WitnessComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
