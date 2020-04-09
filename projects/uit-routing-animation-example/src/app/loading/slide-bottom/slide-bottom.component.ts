import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideBottom} from '../../../../../uit-routing-animation-lib/src/public-api';
@Component({
  selector: 'app-slide-bottom',
  templateUrl: './slide-bottom.component.html',
  styleUrls: ['./slide-bottom.component.css'],
  animations: [
    slideBottom
  ]
})
export class SlideBottomComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  ngOnInit(): void {
  }

}
