import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GetService } from '../general-component/services/get.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,public getService: GetService   ) { }
  profileForm: FormGroup;
  labelList = [];
  labelInterestList=[];
  projectResponse=[];

  skillValue:string;
  interestValue:string;
  // SkillForm: FormGroup;
  
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      contact: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      emailId: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      city: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      college: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      skills: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      interest: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]]
      // interest: [null, [Validators.required, Validators.minLength(5)]],

  });
    console.log("Inside contact details comp");
    this.getProjects();
  }



  addedSkillText(val){
    var skillVal=this.skillValue;
    this.skillValue="";
    this.labelList.push(skillVal);
  }

  removeSkillLabel(val){
    let deleteVal=this.labelList.indexOf(val);
    this.labelList.splice(deleteVal,1);
  }
  
  addInterestText(val){
    var interestVal=this.interestValue;
    this.interestValue="";
    this.labelInterestList.push(interestVal);
  }

  removeInterestLabel(val){
    let deleteVal=this.labelInterestList.indexOf(val);
    this.labelInterestList.splice(deleteVal,1);
  }

  taskSave(){
    
  }

   getProjects(){
      //   this.getService
      // .getJSON("/assets/image/getFilter.json")
      // .subscribe(
      //   response => {
        this.getService.getData("http://blrlw6620:8080/projects").subscribe(
          response => {
    
          this.projectResponse = response;
      
          console.log(this.projectResponse);
        },
        error => console.log(error)
      );
   }
}
