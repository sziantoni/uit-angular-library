import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate_customSpeed} from 'uit-routing-animation-lib';
@Component({
  selector: 'app-rotate-left-high',
  templateUrl: './rotate-left-high.component.html',
  animations: [rotate_customSpeed('left', 'high')]
})
export class RotateLeftHighComponent implements OnInit {


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
