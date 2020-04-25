import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scale-and-slide-medium-medium',
  templateUrl: './scale-and-slide-medium-medium.component.html',
  animations: [scaleAndSlide_customSpeed('medium', 'medium')]
})
export class ScaleAndSlideMediumMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
