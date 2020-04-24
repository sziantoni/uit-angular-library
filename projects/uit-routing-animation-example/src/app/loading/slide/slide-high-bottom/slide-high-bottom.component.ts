import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-slide-high-bottom',
  templateUrl: './slide-high-bottom.component.html',
  animations: [
    slide_customSpeed('bottom', 'high')
  ]

})
export class SlideHighBottomComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
