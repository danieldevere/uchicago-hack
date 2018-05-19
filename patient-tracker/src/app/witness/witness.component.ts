import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../model/patient';
@Component({
  selector: 'app-witness',
  templateUrl: './witness.component.html',
  styleUrls: ['./witness.component.css']
})
export class WitnessComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;
  private witnessForm: FormGroup;

  private video: any;

  constructor(private fb: FormBuilder) {
    this.emergencyTypes.sort();
    this.createForm();
  }

  private emergencyTypes: string[] = [
    'Pregnancy',
    'Penetrating - Gunshot',
    'Penetrating - Knife/Stab',
    'Fractures',
    'Hanging',
    'Drowning/Suffocation',
    'Amputation',
    'Ejection from Vehicle',
    'Fall over 20 feet',
    'Roll over of vehicle',
    'High speed vehicle crash',
    'High speed bicycle crash (>5 mph)',
    'Pedestrian hit by vehicle',
    'Unresponsive or altered mental status',
    'Hidden Injuries (Seat belt/airbag)',
    'Child abuse'
  ];

  private minutes: number[] = [
    0,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60
  ];

  createForm() {
    let patient: Patient = new Patient();
    this.witnessForm = this.fb.group({
      firstname: '',
      lastname: '',
      age: null,
      sex: '',
      location: '',
      description: '',
      minutesAgo: 0,
      typeOfEmergency: ''
    });
  }

  

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }
   sound() {
    this.initCamera({ video: true, audio: true });
  }
  
    initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

}
