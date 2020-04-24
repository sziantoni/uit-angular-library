import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/slideTitleDownBlocks';

@Component({
  selector: 'app-stdb-high-low',
  templateUrl: './stdb-high-low.component.html',
  animations: [slideTitleDownBlocks_customSpeed('high', 'low')]
})
export class StdbHighLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
