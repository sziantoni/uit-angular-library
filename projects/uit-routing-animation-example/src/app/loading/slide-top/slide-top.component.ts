import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTopAnimation} from 'uit-routing-animation-lib';
@Component({
  selector: 'app-slide-top',
  templateUrl: './slide-top.component.html',
  styleUrls: ['./slide-top.component.css'],
  animations: [
    slideTopAnimation()
  ]
})
export class SlideTopComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
