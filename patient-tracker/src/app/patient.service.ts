import { Injectable } from '@angular/core';
import { Patient } from './model/patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})



export class PatientService {

  private PATIENTS: Patient[] = [
    {
      witness: {
        firstname: 'John',
        lastname: 'Doe',
        age: 25
      }
    }
  ]

  private patientUrl = '';

  getAllPatients(): Observable<Patient[]> {
    return of(this.PATIENTS);
  }

  updatePatient(id: string, patient: Patient): Observable<Patient> {
    return of(patient);
  }

  createPatient(patient: Patient): Observable<string> {
    return of('temp id');
  }

  constructor(
    private httpClient: HttpClient
  ) { }
}
