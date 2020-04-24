import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-stdb-medium-low',
  templateUrl: './stdb-medium-low.component.html',
  animations: [slideTitleDownBlocks_customSpeed('medium', 'low')]
})
export class StdbMediumLowComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
