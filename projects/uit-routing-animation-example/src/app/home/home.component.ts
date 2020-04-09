import { Component, OnInit } from '@angular/core';
import { ROUTING_ELEMENT} from '../../../../uit-routing-animation-lib/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routeElement = ROUTING_ELEMENT;

  ngOnInit(): void {
  }

}
