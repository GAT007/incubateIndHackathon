import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(    private router: Router,) { }

  ngOnInit() {
  }


  personal(){
    this.router.navigate(
      ["app/example"]
    );
  }
}
