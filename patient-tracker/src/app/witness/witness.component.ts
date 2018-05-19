import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../model/patient';
@Component({
  selector: 'app-witness',
  templateUrl: './witness.component.html',
  styleUrls: ['./witness.component.css']
})
export class WitnessComponent implements OnInit {

  private witnessForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    let patient: Patient = new Patient();
    this.witnessForm = this.fb.group({
      firstname: '',
      lastname: '',
      age: null,
      sex: '',
      location: ''
    });
  }

  ngOnInit() {
  }

}
