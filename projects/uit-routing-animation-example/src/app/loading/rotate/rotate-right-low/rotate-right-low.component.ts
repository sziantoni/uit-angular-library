import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-rotate-right-low',
  templateUrl: './rotate-right-low.component.html',
  animations: [rotate_customSpeed('right', 'low')]
})
export class RotateRightLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
