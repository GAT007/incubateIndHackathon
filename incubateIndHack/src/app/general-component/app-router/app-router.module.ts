import { Routes } from '@angular/router';

import { ContactDetailsComponent } from '../../userModule/contact-details/contact-details.component';
import { ExampleComponent } from '../../userModule/example/example.component';


export const APP_ROUTES: Routes = [
  {
    path: "",
    component: ContactDetailsComponent
  },
  {
    path: "app/example",
    component: ExampleComponent
    
  }
];




