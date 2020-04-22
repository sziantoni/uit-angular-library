import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {scrollSideAnimation} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scroll-side',
  templateUrl: './scroll-side.component.html',
  styleUrls: ['./scroll-side.component.css'],
  animations: [
    scrollSideAnimation()
  ]
})
export class ScrollSideComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || (outlet && outlet.activatedRouteData);
}

  ngOnInit(): void {
  }

}
