import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scrollSide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scroll-side-high',
  templateUrl: './scroll-side-high.component.html',
  animations: [scrollSide_customSpeed('high')]
})
export class ScrollSideHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
