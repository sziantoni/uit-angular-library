import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  slideBottom,
  scrollSide,
  slideTop,
  rotateSx, leftUp, rightUp
} from '../../../uit-routing-animation-lib/src/public-api';
import {SlideBottomComponent} from './loading/slide-bottom/slide-bottom.component';
import {ScrollSideComponent} from './loading/scroll-side/scroll-side.component';
import {SlideTopComponent} from './loading/slide-top/slide-top.component';
import {RotateSxComponent} from './loading/rotate-sx/rotate-sx.component';
import {LeftUpComponent} from './loading/left-up/left-up.component';
import {RightUpComponent} from './loading/right-up/right-up.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    slideBottom,
    scrollSide,
    slideTop,
    rotateSx,
    leftUp,
    rightUp
  ]
})

export class AppComponent {
  animationSelected = LeftUpComponent;
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  assignComponent(component) {
    switch (component) {
      case 'slideBottom': {
        this.animationSelected = SlideBottomComponent;
        break;
      }
      case 'scrollSide': {
        this.animationSelected = ScrollSideComponent;
        break;
      }
      case 'slideTop': {
        this.animationSelected = SlideTopComponent;
        break;
      }
      case 'rotateSx': {
        this.animationSelected = RotateSxComponent;
        break;
      }
      case 'leftUp': {
        this.animationSelected = LeftUpComponent;
        break;
      }
      case 'rightUp': {
        this.animationSelected = RightUpComponent;
        break;
      }
      default : {
        this.animationSelected = LeftUpComponent;
        break;
      }
    }
  }
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
