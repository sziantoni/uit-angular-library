import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slide_customSpeed} from '../../../../../../uit-routing-animation-lib/src/public-api';

@Component({
  selector: 'app-slide-low-bottom',
  templateUrl: './slide-low-bottom.component.html',
  animations: [
    slide_customSpeed('bottom', 'low')
  ]
})
export class SlideLowBottomComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
