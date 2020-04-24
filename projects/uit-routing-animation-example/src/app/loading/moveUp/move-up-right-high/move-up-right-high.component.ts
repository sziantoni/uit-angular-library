import { Component, OnInit } from '@angular/core';
import {moveUp_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/moveUp';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-move-up-right-high',
  templateUrl: './move-up-right-high.component.html',
  animations: [moveUp_customSpeed('right', 'high')]
})
export class MoveUpRightHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
