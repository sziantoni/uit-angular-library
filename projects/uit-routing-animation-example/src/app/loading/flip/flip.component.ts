import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { flipAnimation } from 'uit-routing-animation-lib';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css'],
  animations: [ flipAnimation()]
})
export class FlipComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
