import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fadeBack_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-fade-back-low',
  templateUrl: './fade-back-low.component.html',
  animations: [fadeBack_customSpeed('low')]
})
export class FadeBackLowComponent implements OnInit {


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
