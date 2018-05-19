import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-witness',
  templateUrl: './witness.component.html',
  styleUrls: ['./witness.component.css']
})
export class WitnessComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;
  
  @ViewChild('canvas') canvas: any;
  private witnessForm: FormGroup;


  private video: any;

  constructor(private fb: FormBuilder, private patientService: PatientService) {
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

  private done: boolean = false;

  public takingPhoto: boolean = false;

  submit() {
    console.log(this.witnessForm.value);
    let tempPatient = this.witnessForm.value;
    tempPatient.time = new Date(new Date().getMinutes() - tempPatient.minutesAgo);
    let patient:Patient = new Patient();
    patient.witness = tempPatient;
    this.patientService.createPatient(patient).subscribe((id) => {
      this.done = true;
    });
  }

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

  takePhoto() {

  }

  public photo: any;



  public capture() {
    console.log('capture');
    // var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.photo = this.canvas.nativeElement.toDataURL("image/png");
    console.log(this.photo);
    this.stopCamera({});
  }

  ngOnInit() {
    // this.video = this.videoElement.nativeElement;
  }

  start() {
    this.takingPhoto = true;
    this.initCamera({ video: true, audio: false });
  }
   sound() {
    this.initCamera({ video: true, audio: true });
  }

  stopCamera(config: any) {
    this.video.pause();
    this.video.src = null;
    this.takingPhoto = false;
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
