import { Component, OnInit } from '@angular/core';
import {animationComposerComplex} from 'uit-routing-animation-lib';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-moveup-rotate',
  templateUrl: './moveup-rotate.component.html',
  animations: [ animationComposerComplex('moveUp', 'medium', 'left', 'rotate', 'medium', 'right') ]
})
export class MoveupRotateComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
