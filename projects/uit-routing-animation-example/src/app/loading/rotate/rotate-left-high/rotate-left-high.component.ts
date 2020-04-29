import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate_customSpeed} from '../../../../../../uit-routing-animation-lib/src/public-api';

@Component({
  selector: 'app-rotate-left-high',
  templateUrl: './rotate-left-high.component.html',
  animations: [rotate_customSpeed('left', 'medium')]
})
export class RotateLeftHighComponent implements OnInit {


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
