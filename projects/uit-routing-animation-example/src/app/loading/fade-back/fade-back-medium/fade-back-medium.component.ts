import { Component, OnInit } from '@angular/core';
import {fadeBack_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/fadeBack';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-fade-back-medium',
  templateUrl: './fade-back-medium.component.html',
  animations: [fadeBack_customSpeed('medium')]})

export class FadeBackMediumComponent implements OnInit {


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
