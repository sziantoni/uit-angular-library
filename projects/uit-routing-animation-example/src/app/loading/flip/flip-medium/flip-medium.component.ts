import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {flip_customSpeed} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-flip-medium',
  templateUrl: './flip-medium.component.html',
  animations: [ flip_customSpeed('medium')]
})
export class FlipMediumComponent implements OnInit {


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
