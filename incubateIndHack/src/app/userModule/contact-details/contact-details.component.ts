import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private router: Router,   private formBuilder: FormBuilder
    ) { }
  labelList = [];
  add:boolean=true;
  skillValue:string;
  skillVal:string;
  // SkillForm: FormGroup;
  
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      skills: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      // interest: [null, [Validators.required, Validators.minLength(5)]],

  });
    console.log("Inside contact details comp")
  }

  addLabel() {
    // this.labelList.push("1");
    this.add=true;
  }

  addedText(val){
    this.add=false;
    var skillVal=this.skillValue;
    this.skillValue="";
    this.labelList.push(skillVal);
  }

}
