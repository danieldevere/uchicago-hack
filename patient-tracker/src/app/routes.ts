import { Routes } from '@angular/router';
import { EmsComponent } from './ems/ems.component';
import { WitnessComponent } from './witness/witness.component';
import { DoctorComponent } from './doctor/doctor.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'witness', pathMatch:'full' },
    { path: 'ems', component: EmsComponent },
    { path: 'witness', component: WitnessComponent },
    { path: 'doctor', component: DoctorComponent }
]