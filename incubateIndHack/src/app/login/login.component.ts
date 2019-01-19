import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl, FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})

export class LoginComponent implements OnInit {

    adminLoginForm: FormGroup;
    userLoginForm:FormGroup;
    isLinear : boolean = true;
    
    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    ngOnInit() {
        this.adminLoginForm = this.formBuilder.group({
            UserId: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
            Password: [null, [Validators.required, Validators.minLength(5)]]
        });

        this.userLoginForm = this.formBuilder.group({
            UserId: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9-]+")]],
            Password: [null, [Validators.required, Validators.minLength(5)]]
        });
    }

    onAdminLogin(event) {   
        this.router.navigate(["/app/example"]);
    }    

    onUserLogin(event) {

    }


}