import { Component, OnInit } from '@angular/core';
import {animationComposerComplex} from 'uit-routing-animation-lib';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-slide-rotate',
  templateUrl: './slide-rotate.component.html',
  animations: [ animationComposerComplex('slide', 'medium', 'top', 'rotate', 'medium', 'right') ]

})
export class SlideRotateComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
