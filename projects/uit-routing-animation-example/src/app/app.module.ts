import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesOfSiteComponent } from './features-of-site/features-of-site.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { PageExampleComponent } from './page-example/page-example.component';
import { SlideHighBottomComponent} from './loading/slide/slide-high-bottom/slide-high-bottom.component';
import { SlideMediumTopComponent } from './loading/slide/slide-medium-top/slide-medium-top.component';
import { SlideMediumBottomComponent } from './loading/slide/slide-medium-bottom/slide-medium-bottom.component';
import { SlideLowBottomComponent } from './loading/slide/slide-low-bottom/slide-low-bottom.component';
import { SlideLowTopComponent } from './loading/slide/slide-low-top/slide-low-top.component';
import { SlideHighTopComponent } from './loading/slide/slide-high-top/slide-high-top.component';
import { FlipLowComponent } from './loading/flip/flip-low/flip-low.component';
import { FlipMediumComponent } from './loading/flip/flip-medium/flip-medium.component';
import { FlipHighComponent } from './loading/flip/flip-high/flip-high.component';
import { RotateRightLowComponent } from './loading/rotate/rotate-right-low/rotate-right-low.component';
import { RotateRightMediumComponent } from './loading/rotate/rotate-right-medium/rotate-right-medium.component';
import { RotateRightHighComponent } from './loading/rotate/rotate-right-high/rotate-right-high.component';
import { RotateLeftLowComponent } from './loading/rotate/rotate-left-low/rotate-left-low.component';
import { RotateLeftMediumComponent } from './loading/rotate/rotate-left-medium/rotate-left-medium.component';
import { RotateLeftHighComponent } from './loading/rotate/rotate-left-high/rotate-left-high.component';
import { FadeBackLowComponent } from './loading/fade-back/fade-back-low/fade-back-low.component';
import { FadeBackMediumComponent } from './loading/fade-back/fade-back-medium/fade-back-medium.component';
import { FadeBackHighComponent } from './loading/fade-back/fade-back-high/fade-back-high.component';
import { MoveUpLeftLowComponent } from './loading/moveUp/move-up-left-low/move-up-left-low.component';
import { MoveUpLeftMediumComponent } from './loading/moveUp/move-up-left-medium/move-up-left-medium.component';
import { MoveUpLeftHighComponent } from './loading/moveUp/move-up-left-high/move-up-left-high.component';
import { MoveUpRightLowComponent } from './loading/moveUp/move-up-right-low/move-up-right-low.component';
import { MoveUpRightMediumComponent } from './loading/moveUp/move-up-right-medium/move-up-right-medium.component';
import { MoveUpRightHighComponent } from './loading/moveUp/move-up-right-high/move-up-right-high.component';
import { Rotate3dLowComponent } from './loading/rotate3d/rotate3d-low/rotate3d-low.component';
import { Rotate3dMediumComponent } from './loading/rotate3d/rotate3d-medium/rotate3d-medium.component';
import { Rotate3dHighComponent } from './loading/rotate3d/rotate3d-high/rotate3d-high.component';
import { ScaleAndSlideLowComponent } from './loading/scale-and-slide/scale-and-slide-low/scale-and-slide-low.component';
import { ScaleAndSlideMediumComponent } from './loading/scale-and-slide/scale-and-slide-medium/scale-and-slide-medium.component';
import { ScaleAndSlideHighComponent } from './loading/scale-and-slide/scale-and-slide-high/scale-and-slide-high.component';
import { ScrollSideLowComponent } from './loading/scroll-side/scroll-side-low/scroll-side-low.component';
import { ScrollSideMediumComponent } from './loading/scroll-side/scroll-side-medium/scroll-side-medium.component';
import { ScrollSideHighComponent } from './loading/scroll-side/scroll-side-high/scroll-side-high.component';
import { StdbLowLowComponent } from './loading/slide-title-down-blocks/stdb-low-low/stdb-low-low.component';
import { StdbLowMediumComponent } from './loading/slide-title-down-blocks/stdb-low-medium/stdb-low-medium.component';
import { StdbLowHighComponent } from './loading/slide-title-down-blocks/stdb-low-high/stdb-low-high.component';
import { StdbMediumLowComponent } from './loading/slide-title-down-blocks/stdb-medium-low/stdb-medium-low.component';
import { StdbMediumMediumComponent } from './loading/slide-title-down-blocks/stdb-medium-medium/stdb-medium-medium.component';
import { StdbMediumHighComponent } from './loading/slide-title-down-blocks/stdb-medium-high/stdb-medium-high.component';
import { StdbHighLowComponent } from './loading/slide-title-down-blocks/stdb-high-low/stdb-high-low.component';
import { StdbHighMediumComponent } from './loading/slide-title-down-blocks/stdb-high-medium/stdb-high-medium.component';
import { StdbHighHighComponent } from './loading/slide-title-down-blocks/stdb-high-high/stdb-high-high.component';
import { SurpriseLowComponent } from './loading/surprise/surprise-low/surprise-low.component';
import { SurpriseMediumComponent } from './loading/surprise/surprise-medium/surprise-medium.component';
import { SurpriseHighComponent } from './loading/surprise/surprise-high/surprise-high.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FeaturesOfSiteComponent,
    PageExampleComponent,
    SlideHighBottomComponent,
    SlideMediumTopComponent,
    SlideMediumBottomComponent,
    SlideLowBottomComponent,
    SlideLowTopComponent,
    SlideHighTopComponent,
    FlipLowComponent,
    FlipMediumComponent,
    FlipHighComponent,
    RotateRightLowComponent,
    RotateRightMediumComponent,
    RotateRightHighComponent,
    RotateLeftLowComponent,
    RotateLeftMediumComponent,
    RotateLeftHighComponent,
    FadeBackLowComponent,
    FadeBackMediumComponent,
    FadeBackHighComponent,
    MoveUpLeftLowComponent,
    MoveUpLeftMediumComponent,
    MoveUpLeftHighComponent,
    MoveUpRightLowComponent,
    MoveUpRightMediumComponent,
    MoveUpRightHighComponent,
    Rotate3dLowComponent,
    Rotate3dMediumComponent,
    Rotate3dHighComponent,
    ScaleAndSlideLowComponent,
    ScaleAndSlideMediumComponent,
    ScaleAndSlideHighComponent,
    ScrollSideLowComponent,
    ScrollSideMediumComponent,
    ScrollSideHighComponent,
    StdbLowLowComponent,
    StdbLowMediumComponent,
    StdbLowHighComponent,
    StdbMediumLowComponent,
    StdbMediumMediumComponent,
    StdbMediumHighComponent,
    StdbHighLowComponent,
    StdbHighMediumComponent,
    StdbHighHighComponent,
    SurpriseLowComponent,
    SurpriseMediumComponent,
    SurpriseHighComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, data: {animation: 'scrollLeft'}},
      {path: 'about', component: AboutComponent},
      {path: 'features', component: FeaturesOfSiteComponent, data: {animation: 'scrollRight'}},
      {path: 'page-example', component: PageExampleComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
