import { Component, OnInit } from '@angular/core';
import {slide_customSpeed} from '../../../../../../uit-routing-animation-lib/src/public-api';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-slide-low-top',
  templateUrl: './slide-low-top.component.html',
  styleUrls: ['./slide-low-top.component.css'],
  animations: [
    slide_customSpeed('top', 'low')
  ]
})
export class SlideLowTopComponent implements OnInit {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
