import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {slideBottom , scrollSide} from '../../../uit-routing-animation-lib/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    slideBottom,
    scrollSide
  ]
})

export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
