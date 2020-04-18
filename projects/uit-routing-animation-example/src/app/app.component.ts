import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  slideBottom,
  scrollSide,
  slideTop,
  rotateSx, leftUp, rightUp, rotateDx, flip, fadeBack, scaleAndSlide, slideTitleDownBlocks
} from '../../../uit-routing-animation-lib/src/public-api';
import {SlideBottomComponent} from './loading/slide-bottom/slide-bottom.component';
import {ScrollSideComponent} from './loading/scroll-side/scroll-side.component';
import {SlideTopComponent} from './loading/slide-top/slide-top.component';
import {RotateSxComponent} from './loading/rotate-sx/rotate-sx.component';
import {LeftUpComponent} from './loading/left-up/left-up.component';
import {RightUpComponent} from './loading/right-up/right-up.component';
import {RotateDxComponent} from './loading/rotate-dx/rotate-dx.component';
import {FlipComponent} from './loading/flip/flip.component';
import {FadeBackComponent} from './loading/fade-back/fade-back.component';
import {ScaleAndSlideComponent} from './loading/scale-and-slide/scale-and-slide.component';
import {SurpriseComponent} from './loading/surprise/surprise.component';
import {SlideTitleDownBlocksComponent} from './loading/slide-title-down-blocks/slide-title-down-blocks.component';


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
    rightUp,
    rotateDx,
    flip,
    fadeBack,
    scaleAndSlide,
    slideTitleDownBlocks
  ]
})

export class AppComponent {
  animationSelected = SlideTitleDownBlocksComponent;
  animationString = 'Slide Bottom';
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  assignComponent(component) {
    switch (component) {
      case 'slideBottom': {
        this.animationSelected = SlideBottomComponent;
        this.animationString = 'Slide Bottom';
        break;
      }
      case 'scrollSide': {
        this.animationSelected = ScrollSideComponent;
        this.animationString = 'Scroll Side';
        break;
      }
      case 'slideTop': {
        this.animationSelected = SlideTopComponent;
        this.animationString = 'Slide Top';
        break;
      }
      case 'rotateSx': {
        this.animationSelected = RotateSxComponent;
        this.animationString = 'Rotate Sx';
        break;
      }
      case 'rotateDx': {
        this.animationSelected = RotateDxComponent;
        this.animationString = 'Rotate Dx';
        break;
      }
      case 'leftUp': {
        this.animationSelected = LeftUpComponent;
        this.animationString = 'Left Up';
        break;
      }
      case 'rightUp': {
        this.animationSelected = RightUpComponent;
        this.animationString = 'Right Up';
        break;
      }
      case 'flip': {
        this.animationSelected = FlipComponent;
        this.animationString = 'Flip';
        break;
      }
      case 'fadeBack': {
        this.animationSelected = FadeBackComponent;
        this.animationString = 'Fade Back';
        break;
      }
      case 'scaleAndSlide': {
          this.animationSelected = ScaleAndSlideComponent;
          this.animationString = 'Scale and Slide';
          break;
      }
      case 'surprise': {
        this.animationSelected = SurpriseComponent;
        this.animationString = 'Surprise';
        break;
      }
      case 'stdb': {
        this.animationSelected = SlideTitleDownBlocksComponent;
        this.animationString = 'Slide Title Down Blocks';
        break;
      }
    }
  }
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
