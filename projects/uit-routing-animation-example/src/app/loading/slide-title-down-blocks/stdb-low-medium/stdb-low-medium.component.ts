import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-stdb-low-medium',
  templateUrl: './stdb-low-medium.component.html',
  animations: [slideTitleDownBlocks_customSpeed('low', 'medium')]
})
export class StdbLowMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
