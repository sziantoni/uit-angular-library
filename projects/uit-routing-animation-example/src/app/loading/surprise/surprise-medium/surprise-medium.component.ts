import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {surprise_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-surprise-medium',
  templateUrl: './surprise-medium.component.html',
  animations: [surprise_customSpeed('medium')]
})
export class SurpriseMediumComponent implements OnInit {


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
