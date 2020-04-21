import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fadeBack} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-fade-back',
  templateUrl: './fade-back.component.html',
  styleUrls: ['./fade-back.component.css'],
  animations: [fadeBack]
})
export class FadeBackComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }


  ngOnInit(): void {
  }

}
