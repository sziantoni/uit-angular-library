import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/slideTitleDownBlocks';

@Component({
  selector: 'app-stdb-low-low',
  templateUrl: './stdb-low-low.component.html',
  animations: [slideTitleDownBlocks_customSpeed('low', 'low')]
})
export class StdbLowLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
