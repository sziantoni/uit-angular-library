import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { flip_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-flip',
  templateUrl: './flip-high.component.html',
  animations: [ flip_customSpeed('high')]
})
export class FlipHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
