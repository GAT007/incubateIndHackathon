import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GetService } from '../../general-component/services/get.service';
import { Project } from '../../model/project';
import { PostService } from '../../general-component/services/post.service';

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
  projectProfileForm:FormGroup;
  projectResponse=[];
  taskResponse=[];
  projectModel = new Project();
  constructor(
    private formBuilder: FormBuilder,public getService: GetService ,public postService: PostService
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
    });
    this.projectProfileForm = this.formBuilder.group({
      pName: [null, [Validators.required, Validators.minLength(15)]],
      pDesc: [null, [Validators.required, Validators.minLength(15)]]});
  this.getProjects();
  }

  editTask() {
    this.viewTask = false;
  }

  cancelTask() {
    this.viewTask = true;
  }

  saveTask(event) {
    //call save api
    console.log(event);

    console.log(this.taskForm.value.taskDeadline);
    // this.projectModel.description=this.taskForm.value.
    
    var taskDeadLine=this.taskForm.value.taskDeadline;
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


  getProjects(){
    //   this.getService
    // .getJSON("/assets/project.json")
    // .subscribe(
    //   response => {
      this.getService.getData("http://blrlw6620:8080/projects").subscribe(
        response => {
  
        this.projectResponse = response;
    
        console.log("title "+this.projectResponse);
      },
      error => console.log(error)
    );
 }

 saveProject(){
  this.projectModel.description=this.projectProfileForm.value.pDesc;
  this.projectModel.title=this.projectProfileForm.value.pName;
  // this.getService
  // .getJSON("/assets/project.json")
  // .subscribe(
  //   response => {

  this.postService
  .postData("http://blrlw6620:8080/projects", this.projectModel)
  .subscribe(
    resp => {
       
  
      console.log("Added Successfully "+resp);
      this.getProjects();
    },
    error => console.log(error)
  );
 }
 
 getTaskFromProject(project){
  //   this.getService
  // .getJSON("/assets/image/getFilter.json")
  // .subscribe(
  //   response => {
    this.getService.getData("http://blrlw6620:8080/projects/"+project+"/tasks").subscribe(
      response => {

      this.taskResponse = response;
  
      console.log(this.taskResponse);
    },
    error => console.log(error)
  );
}
}
