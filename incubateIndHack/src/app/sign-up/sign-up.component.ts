import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  
  adminSignUpForm: FormGroup;
  userSignUpForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.adminSignUpForm = this.formBuilder.group({
      UserId: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      EmailId: [null, [Validators.required, Validators.minLength(5)]],
      Password: [null, [Validators.required, Validators.minLength(5)]],
      ConfirmPassword: [null, [Validators.required, Validators.minLength(5)]]
  });

  this.userSignUpForm = this.formBuilder.group({
      UserId: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
      EmailId: [null, [Validators.required, Validators.minLength(5)]],
      Password: [null, [Validators.required, Validators.minLength(5)]],
      ConfirmPassword: [null, [Validators.required, Validators.minLength(5)]]
  });
  }

  onAdminSignUp() {
    this.router.navigate(["app/adminDashboard"]);
  }

  onUserSignUp() {
    this.router.navigate(["app/contactDetails"]);
  }

  redirect(){
    window.history.back();
  }
}
