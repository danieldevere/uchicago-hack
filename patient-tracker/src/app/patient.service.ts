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

  private patientUrl = 'http://334d2fc0.ngrok.io';

  getAllPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.patientUrl + '/patients');
  }

  updatePatient(id: string, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(this.patientUrl + '/patient/' + id , patient);
  }

  createPatient(patient: Patient): Observable<string> {
    return this.httpClient.post<string>(this.patientUrl + '/patient', patient);
  }

  constructor(
    private httpClient: HttpClient
  ) { }
}
