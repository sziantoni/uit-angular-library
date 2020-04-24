import { Component, OnInit } from '@angular/core';
import {rotate3D_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/rotate3D';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-rotate3d-medium',
  templateUrl: './rotate3d-medium.component.html',
  animations: [rotate3D_customSpeed('medium')]
})
export class Rotate3dMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
