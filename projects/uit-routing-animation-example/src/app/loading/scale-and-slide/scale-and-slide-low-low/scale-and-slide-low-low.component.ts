import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scale-and-slide-low-low',
  templateUrl: './scale-and-slide-low-low.component.html',
  animations: [scaleAndSlide_customSpeed('low', 'low')]
})
export class ScaleAndSlideLowLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
