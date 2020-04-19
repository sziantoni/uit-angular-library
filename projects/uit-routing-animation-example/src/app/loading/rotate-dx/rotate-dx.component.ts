import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotateDx} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-rotate-dx',
  templateUrl: './rotate-dx.component.html',
  styleUrls: ['./rotate-dx.component.css'],
  animations: [ rotateDx]
})
export class RotateDxComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  ngOnInit(): void {
  }

}
