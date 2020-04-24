import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {flip_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/flip';

@Component({
  selector: 'app-flip-low',
  templateUrl: './flip-low.component.html',
  animations: [ flip_customSpeed('low')]
})
export class FlipLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
