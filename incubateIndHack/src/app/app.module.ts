import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './userModule/contact-details/contact-details.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './general-component/app-router/app-router.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExampleComponent } from './userModule/example/example.component';
import { MatCardModule } from '@angular/material/card';

import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from './sign-up/sign-up.component'
@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ExampleComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      APP_ROUTES,
      {
        enableTracing: true,
        useHash: true
      }// <-- debugging purposes only
    ),
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);