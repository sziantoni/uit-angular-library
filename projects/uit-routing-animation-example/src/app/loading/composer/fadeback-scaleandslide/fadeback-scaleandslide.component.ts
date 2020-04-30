import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationComposerComplex} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-fadeback-scaleandslide',
  templateUrl: './fadeback-scaleandslide.component.html',
  animations: [animationComposerComplex('fadeBack', 'medium', '', 'scaleAndSlide', 'medium', 'right')]
})
export class FadebackScaleandslideComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
