import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scrollSide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scroll-side-low',
  templateUrl: './scroll-side-low.component.html',
  animations: [scrollSide_customSpeed('low')]
})
export class ScrollSideLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
