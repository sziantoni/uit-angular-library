import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-stdb-medium-high',
  templateUrl: './stdb-medium-high.component.html',
  animations: [slideTitleDownBlocks_customSpeed('medium', 'high')]
})
export class StdbMediumHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
