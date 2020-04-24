import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/slideTitleDownBlocks';

@Component({
  selector: 'app-stdb-high-medium',
  templateUrl: './stdb-high-medium.component.html',
  animations: [slideTitleDownBlocks_customSpeed('high', 'medium')]
})
export class StdbHighMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
