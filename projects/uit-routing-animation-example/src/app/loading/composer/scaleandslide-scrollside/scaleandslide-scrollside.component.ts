import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationComposerComplex} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-scaleandslide-scrollside',
  templateUrl: './scaleandslide-scrollside.component.html',
  animations: [animationComposerComplex('scaleAndSlide', 'medium', 'left', 'scrollSide', 'medium', 'left')]
})
export class ScaleandslideScrollsideComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
