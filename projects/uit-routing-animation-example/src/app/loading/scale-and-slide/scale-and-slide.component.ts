import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlideAnimation} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scale-and-slide',
  templateUrl: './scale-and-slide.component.html',
  styleUrls: ['./scale-and-slide.component.css'],
  animations: [scaleAndSlideAnimation() ]
})
export class ScaleAndSlideComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
