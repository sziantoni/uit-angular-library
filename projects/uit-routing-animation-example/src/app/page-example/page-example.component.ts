import { Component, OnInit } from '@angular/core';
import { ROUTING_ELEMENT} from '../../../../uit-routing-animation-lib/src/public-api';
@Component({
  selector: 'app-page-example',
  templateUrl: './page-example.component.html',
  styleUrls: ['./page-example.component.css']
})
export class PageExampleComponent implements OnInit {
  routeElement = ROUTING_ELEMENT;
  constructor() { }

  ngOnInit(): void {
  }

}
