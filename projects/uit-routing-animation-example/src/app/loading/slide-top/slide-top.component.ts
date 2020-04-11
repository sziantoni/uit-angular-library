import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTop} from '../../../../../uit-routing-animation-lib/src/public-api';
@Component({
  selector: 'app-slide-top',
  templateUrl: './slide-top.component.html',
  styleUrls: ['./slide-top.component.css'],
  animations: [
    slideTop
  ]
})
export class SlideTopComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  ngOnInit(): void {
  }

}
