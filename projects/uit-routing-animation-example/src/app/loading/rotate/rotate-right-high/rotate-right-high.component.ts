import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-rotate-right-high',
  templateUrl: './rotate-right-high.component.html',
  animations: [rotate_customSpeed('right', 'high')]
})
export class RotateRightHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
