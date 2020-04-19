import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rightUp} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-right-up',
  templateUrl: './right-up.component.html',
  styleUrls: ['./right-up.component.css'],
  animations: [
    rightUp
  ]
})
export class RightUpComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  ngOnInit(): void {
  }

}
