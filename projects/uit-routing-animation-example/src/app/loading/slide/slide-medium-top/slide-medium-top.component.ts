import { Component, OnInit } from '@angular/core';
import {slide_customSpeed} from 'uit-routing-animation-lib';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-slide-medium-top',
  templateUrl: './slide-medium-top.component.html',
  styleUrls: ['./slide-medium-top.component.css'],
  animations: [
    slide_customSpeed('top', 'medium')
  ]
})
export class SlideMediumTopComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
