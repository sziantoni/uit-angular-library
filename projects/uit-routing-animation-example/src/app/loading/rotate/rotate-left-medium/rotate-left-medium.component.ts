import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotate_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/rotate';

@Component({
  selector: 'app-rotate-left-medium',
  templateUrl: './rotate-left-medium.component.html',
  animations: [rotate_customSpeed('left', 'medium')]
})
export class RotateLeftMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
