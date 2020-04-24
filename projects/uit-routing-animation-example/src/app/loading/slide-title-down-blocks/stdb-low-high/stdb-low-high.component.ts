import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-stdb-low-high',
  templateUrl: './stdb-low-high.component.html',
  animations: [slideTitleDownBlocks_customSpeed('low', 'high')]
})
export class StdbLowHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
