import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/rotate';

@Component({
  selector: 'app-rotate-right-medium',
  templateUrl: './rotate-right-medium.component.html',
  animations: [rotate_customSpeed('right', 'medium')]
})
export class RotateRightMediumComponent implements OnInit {


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
