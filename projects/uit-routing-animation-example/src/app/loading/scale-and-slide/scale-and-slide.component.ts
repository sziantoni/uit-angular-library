import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scaleAndSlide} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scale-and-slide',
  templateUrl: './scale-and-slide.component.html',
  styleUrls: ['./scale-and-slide.component.css'],
  animations: [scaleAndSlide ]
})
export class ScaleAndSlideComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  ngOnInit(): void {
  }

}
