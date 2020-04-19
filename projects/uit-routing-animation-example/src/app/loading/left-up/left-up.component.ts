import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {leftUp} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-left-up',
  templateUrl: './left-up.component.html',
  styleUrls: ['./left-up.component.css'],
  animations: [
    leftUp
  ]
})
export class LeftUpComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


  ngOnInit(): void {
  }

}
