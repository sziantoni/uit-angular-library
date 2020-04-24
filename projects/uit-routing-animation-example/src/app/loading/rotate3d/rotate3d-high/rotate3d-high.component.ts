import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate3D_customSpeed} from '../../../../../../uit-routing-animation-lib/src/public-api';

@Component({
  selector: 'app-rotate3d-high',
  templateUrl: './rotate3d-high.component.html',
animations: [rotate3D_customSpeed('high')]
})
export class Rotate3dHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
