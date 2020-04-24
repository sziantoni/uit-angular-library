import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {moveUp_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/moveUp';

@Component({
  selector: 'app-move-up-right-low',
  templateUrl: './move-up-right-low.component.html',
  animations: [moveUp_customSpeed('right', 'low')]
})
export class MoveUpRightLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
