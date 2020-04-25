import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scale-and-slide-low-medium',
  templateUrl: './scale-and-slide-low-medium.component.html',
  animations: [scaleAndSlide_customSpeed('low', 'medium')]
})
export class ScaleAndSlideLowMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
