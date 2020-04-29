import { Component, OnInit } from '@angular/core';
import {animationComposerSimple} from 'uit-routing-animation-lib';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-fadeback-flip',
  templateUrl: './fadeback-flip.component.html',
  animations: [ animationComposerSimple('fadeBack', 'medium', 'flip', 'medium') ]
})
export class FadebackFlipComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
