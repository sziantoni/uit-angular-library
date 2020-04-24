import { Component, OnInit } from '@angular/core';
import {moveUp_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/moveUp';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-move-up-left-medium',
  templateUrl: './move-up-left-medium.component.html',
  animations: [moveUp_customSpeed('left', 'medium')]
})
export class MoveUpLeftMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
