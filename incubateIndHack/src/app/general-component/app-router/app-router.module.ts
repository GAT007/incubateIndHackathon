import { Routes } from '@angular/router';

import { ContactDetailsComponent } from '../../userModule/contact-details/contact-details.component';
import { ExampleComponent } from '../../userModule/example/example.component';
import { LoginComponent } from "../../login/login.component";
import { SignUpComponent } from "../../sign-up/sign-up.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "app/contactDetails",
    component: ContactDetailsComponent
  },
  {
    path: "app/example",
    component: ExampleComponent
  },
  {
    path: "app/sign-up",
    component: SignUpComponent
  }
];




