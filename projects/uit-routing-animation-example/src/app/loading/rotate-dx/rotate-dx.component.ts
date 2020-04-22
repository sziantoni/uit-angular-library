import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {rotateDxAnimation} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-rotate-dx',
  templateUrl: './rotate-dx.component.html',
  styleUrls: ['./rotate-dx.component.css'],
  animations: [ rotateDxAnimation()]
})
export class RotateDxComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
