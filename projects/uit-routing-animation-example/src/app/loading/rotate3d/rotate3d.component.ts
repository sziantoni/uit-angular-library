import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate3DAnimation} from '../../../../../uit-routing-animation-lib/src/public-api';

@Component({
  selector: 'app-rotate3d',
  templateUrl: './rotate3d.component.html',
  styleUrls: ['./rotate3d.component.css'],
  animations: [rotate3DAnimation()]
})
export class Rotate3dComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
