import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slide_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-slide-medium-bottom',
  templateUrl: './slide-medium-bottom.component.html',
  animations: [
    slide_customSpeed('bottom', 'medium')
  ]
})
export class SlideMediumBottomComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
