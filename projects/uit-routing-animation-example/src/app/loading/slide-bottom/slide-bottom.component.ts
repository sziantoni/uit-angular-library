import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideBottomAnimation} from 'uit-routing-animation-lib';
@Component({
  selector: 'app-slide-bottom',
  templateUrl: './slide-bottom.component.html',
  styleUrls: ['./slide-bottom.component.css'],
  animations: [
    slideBottomAnimation()
  ]
})
export class SlideBottomComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
