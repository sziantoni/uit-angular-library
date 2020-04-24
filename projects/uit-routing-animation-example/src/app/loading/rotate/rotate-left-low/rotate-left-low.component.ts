import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-rotate-left-low',
  templateUrl: './rotate-left-low.component.html',
  animations: [rotate_customSpeed('left', 'low')]
})
export class RotateLeftLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
