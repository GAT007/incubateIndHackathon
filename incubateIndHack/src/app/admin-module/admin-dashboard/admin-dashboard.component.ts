import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  viewProject: boolean = true;
  viewTask: boolean = true;
  viewProfile: boolean = true;
  taskForm: FormGroup;
  adminProfileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskDeadline: [null, [Validators.required, Validators.minLength(15)]],
      taskScore: [null, [Validators.required, Validators.minLength(15)]],
      taskStatus: [null, [Validators.required, Validators.minLength(15)]]
    });
    this.adminProfileForm = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.minLength(15)]],
      contactNo: [null, [Validators.required, Validators.minLength(15)]],
      emailId: [null, [Validators.required, Validators.minLength(15)]]
    })

  }

  editTask() {
    this.viewTask = false;
  }

  cancelTask() {
    this.viewTask = true;
  }

  saveTask() {
    //call save api
    this.viewTask = true;
  }

  editProfile() {
    this.viewProfile = false;
  }

  saveProfile() {
    //call save api
    this.viewProfile = true;
  }

  cancelProfile() {
    this.viewProfile = true;
  }

}
