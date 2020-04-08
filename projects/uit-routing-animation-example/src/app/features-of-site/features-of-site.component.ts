import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS, ROUTE_ANIMATIONS_TEXT} from '../../../../uit-routing-animation-lib/src/public-api';


@Component({
  selector: 'app-features-of-site',
  templateUrl: './features-of-site.component.html',
  styleUrls: ['./features-of-site.component.css']
})
export class FeaturesOfSiteComponent implements OnInit {
  routeElement = ROUTE_ANIMATIONS_ELEMENTS;
  routeTextElement = ROUTE_ANIMATIONS_TEXT;

  ngOnInit(): void {
  }

}
