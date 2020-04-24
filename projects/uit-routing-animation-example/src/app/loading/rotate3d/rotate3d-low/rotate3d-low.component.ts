import { Component, OnInit } from '@angular/core';
import {rotate3D_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/rotate3D';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-rotate3d-low',
  templateUrl: './rotate3d-low.component.html',
  animations: [rotate3D_customSpeed('low')]
})
export class Rotate3dLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
