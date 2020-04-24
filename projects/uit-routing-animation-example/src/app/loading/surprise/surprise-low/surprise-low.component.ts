import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {surprise_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/surprise';

@Component({
  selector: 'app-surprise-low',
  templateUrl: './surprise-low.component.html',
  animations: [surprise_customSpeed('low')]
})
export class SurpriseLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
