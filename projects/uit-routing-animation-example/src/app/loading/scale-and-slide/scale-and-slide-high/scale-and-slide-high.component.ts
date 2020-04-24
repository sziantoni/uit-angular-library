import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlide_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/scaleAndSlide';

@Component({
  selector: 'app-scale-and-slide-high',
  templateUrl: './scale-and-slide-high.component.html',
  animations: [scaleAndSlide_customSpeed('high') ]
})
export class ScaleAndSlideHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
