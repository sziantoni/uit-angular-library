import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationComposerComplex} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scrollside-flip',
  templateUrl: './scrollside-flip.component.html',
  animations: [animationComposerComplex('scrollSide', 'medium', 'right', 'flip', 'medium', '')]
})
export class ScrollsideFlipComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
