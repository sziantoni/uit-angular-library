import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationComposerComplex} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-slide-stdb',
  templateUrl: './slide-stdb.component.html',
  animations: [ animationComposerComplex('slide', 'medium', 'bottom', 'slideTitleDownBlocks', 'medium', '') ]

})
export class SlideStdbComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
