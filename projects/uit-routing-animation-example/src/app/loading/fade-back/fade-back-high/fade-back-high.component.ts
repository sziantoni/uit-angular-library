import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fadeBack_customSpeed} from '../../../../../../uit-routing-animation-lib/src/lib/fadeBack';

@Component({
  selector: 'app-fade-back-high',
  templateUrl: './fade-back-high.component.html',
  animations: [fadeBack_customSpeed('high')]
})
export class FadeBackHighComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
