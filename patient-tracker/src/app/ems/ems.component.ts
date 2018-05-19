import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ems',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.css']
})
export class EmsComponent implements OnInit {

  private emsForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

}
