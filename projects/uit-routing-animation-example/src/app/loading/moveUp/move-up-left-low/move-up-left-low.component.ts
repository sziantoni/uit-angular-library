import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {moveUp_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/moveUp';

@Component({
  selector: 'app-move-up-left-low',
  templateUrl: './move-up-left-low.component.html',
  animations: [moveUp_customSpeed('left', 'low')]
})
export class MoveUpLeftLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
