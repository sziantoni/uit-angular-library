import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {surprise_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-surprise-high',
  templateUrl: './surprise-high.component.html',
  animations: [surprise_customSpeed('high')]
})
export class SurpriseHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
