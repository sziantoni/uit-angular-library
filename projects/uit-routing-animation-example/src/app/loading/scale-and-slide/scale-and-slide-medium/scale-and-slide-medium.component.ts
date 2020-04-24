import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlide_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/scaleAndSlide';

@Component({
  selector: 'app-scale-and-slide-medium',
  templateUrl: './scale-and-slide-medium.component.html',
  animations: [scaleAndSlide_customSpeed('medium') ]
})
export class ScaleAndSlideMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
