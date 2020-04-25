import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scale-and-slide-medium-high',
  templateUrl: './scale-and-slide-medium-high.component.html',
  animations: [scaleAndSlide_customSpeed('medium', 'high')]
})
export class ScaleAndSlideMediumHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
