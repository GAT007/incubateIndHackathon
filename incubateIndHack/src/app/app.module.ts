import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './userModule/contact-details/contact-details.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './general-component/app-router/app-router.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExampleComponent } from './userModule/example/example.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
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
    MatCardModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);