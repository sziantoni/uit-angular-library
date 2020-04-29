import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationComposerComplex} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-fadeback-slide',
  templateUrl: './fadeback-slide.component.html',
  animations: [ animationComposerComplex('fadeBack', 'medium', '', 'slide', 'medium', 'top') ]
})
export class FadebackSlideComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
