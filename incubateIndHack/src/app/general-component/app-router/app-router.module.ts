import { Routes } from '@angular/router';

import { UserDashboardComponent } from '../../userModule/user-dashboard.component';
import { ExampleComponent } from '../../example/example.component';
import { LoginComponent } from "../../login/login.component";
import { SignUpComponent } from "../../sign-up/sign-up.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: UserDashboardComponent
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
  }
];




