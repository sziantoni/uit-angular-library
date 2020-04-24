import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scrollSide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scroll-side-medium',
  templateUrl: './scroll-side-medium.component.html',
  animations: [scrollSide_customSpeed('medium')]
})
export class ScrollSideMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
  }

  ngOnInit(): void {
  }

}
