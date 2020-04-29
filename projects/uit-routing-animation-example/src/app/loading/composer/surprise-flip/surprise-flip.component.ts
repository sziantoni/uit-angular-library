import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationComposerSimple} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-surprise-flip',
  templateUrl: './surprise-flip.component.html',
  animations: [ animationComposerSimple('surprise', 'medium', 'flip', 'medium') ]

})
export class SurpriseFlipComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
