import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationComposerComplex} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-stdb-moveup',
  templateUrl: './stdb-moveup.component.html',
  animations: [ animationComposerComplex('slideTitleDownBlocks', 'medium', '', 'moveUp', 'medium', 'right') ]

})
export class StdbMoveupComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
