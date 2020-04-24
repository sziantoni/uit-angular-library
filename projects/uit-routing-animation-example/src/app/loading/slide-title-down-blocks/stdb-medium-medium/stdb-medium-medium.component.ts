import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideTitleDownBlocks_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-stdb-medium-medium',
  templateUrl: './stdb-medium-medium.component.html',
  animations: [slideTitleDownBlocks_customSpeed('medium', 'medium')]
})
export class StdbMediumMediumComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
