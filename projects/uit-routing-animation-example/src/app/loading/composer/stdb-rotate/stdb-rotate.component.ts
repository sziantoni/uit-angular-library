import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationComposerComplex} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-stdb-rotate',
  templateUrl: './stdb-rotate.component.html',
  animations: [ animationComposerComplex('slideTitleDownBlocks', 'medium', '', 'rotate', 'medium', 'left') ]

})
export class StdbRotateComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
