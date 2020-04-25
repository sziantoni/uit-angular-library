import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scale-and-slide-medium-low',
  templateUrl: './scale-and-slide-medium-low.component.html',
  animations: [scaleAndSlide_customSpeed('medium', 'low')]
})
export class ScaleAndSlideMediumLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
