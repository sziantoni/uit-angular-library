import { Component, OnInit } from '@angular/core';
import {moveUp_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/moveUp';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-move-up-left-high',
  templateUrl: './move-up-left-high.component.html',
  animations: [moveUp_customSpeed('left', 'high')]
})
export class MoveUpLeftHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
