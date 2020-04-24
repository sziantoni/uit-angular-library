import { Component, OnInit } from '@angular/core';
import {scaleAndSlide_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/scaleAndSlide';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-scale-and-slide-low',
  templateUrl: './scale-and-slide-low.component.html',
  animations: [scaleAndSlide_customSpeed('low') ]
})
export class ScaleAndSlideLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
