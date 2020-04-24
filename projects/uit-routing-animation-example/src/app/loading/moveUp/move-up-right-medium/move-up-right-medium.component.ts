import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {moveUp_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-move-up-right-medium',
  templateUrl: './move-up-right-medium.component.html',
  animations: [moveUp_customSpeed('right', 'medium')]
})
export class MoveUpRightMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
