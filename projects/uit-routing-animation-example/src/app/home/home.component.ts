import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS} from '../../../../uit-routing-animation-lib/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routeElement = ROUTE_ANIMATIONS_ELEMENTS;

  ngOnInit(): void {
  }

}
