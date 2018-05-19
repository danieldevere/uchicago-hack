import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ems',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.css']
})
export class EmsComponent implements OnInit {

  public emsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emsForm = new FormGroup({
      tech1Name: new FormControl(null, [Validators.required]),
      tech2Name: new FormControl(null),
      chiefComplaint: new FormControl(null, [Validators.required]),
      medications: new FormControl(null, [Validators.required]),
      pastHistory: new FormControl(null, [Validators.required]),
      allergies: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
  }

  submit() {
    debugger;
  }

}
