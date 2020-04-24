import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-slide-high-top',
  templateUrl: './slide-high-top.component.html',
  animations: [
    slide_customSpeed('top', 'high')
  ]

})
export class SlideHighTopComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
