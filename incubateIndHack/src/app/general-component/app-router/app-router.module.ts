import { Routes } from '@angular/router';

import { UserDashboardComponent } from '../../userModule/user-dashboard.component';
import { ExampleComponent } from '../../example/example.component';

import { SignUpComponent } from "../../sign-up/sign-up.component";
import { LoginComponent } from '../../loginModule/login/login.component';
import { AdminDashboardComponent } from '../../admin-module/admin-dashboard/admin-dashboard.component';

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "app/userDashboard",
    component: UserDashboardComponent
  },
  {
    path: "app/example",
    component: ExampleComponent
  },
  {
    path: "app/signup",
    component: SignUpComponent
  }, 
  {
    path: "app/LoginComponent",
    component: LoginComponent
  }, 
  {
    path: "app/adminDashboard",
    component: AdminDashboardComponent
  }
];




