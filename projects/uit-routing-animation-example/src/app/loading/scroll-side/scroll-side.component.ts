import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scrollSide} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scroll-side',
  templateUrl: './scroll-side.component.html',
  styleUrls: ['./scroll-side.component.css'],
  animations: [
    scrollSide
  ]
})
export class ScrollSideComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation;
  }

  ngOnInit(): void {
  }

}
