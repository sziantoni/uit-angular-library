import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from '../../../../../../uit-routing-animation-lib/src/public-api';

@Component({
  selector: 'app-stdb-high-high',
  templateUrl: './stdb-high-high.component.html',
  animations: [slideTitleDownBlocks_customSpeed('high', 'high')]
})
export class StdbHighHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
