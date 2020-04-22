import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotateSxAnimation} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-rotate-sx',
  templateUrl: './rotate-sx.component.html',
  styleUrls: ['./rotate-sx.component.css'],
  animations: [ rotateSxAnimation() ]
})
export class RotateSxComponent implements OnInit {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
