import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesOfSiteComponent } from './features-of-site/features-of-site.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ScrollSideComponent } from './loading/scroll-side/scroll-side.component';
import { PageExampleComponent } from './page-example/page-example.component';
import { LeftUpComponent } from './loading/left-up/left-up.component';
import { RightUpComponent } from './loading/right-up/right-up.component';
import { FadeBackComponent } from './loading/fade-back/fade-back.component';
import { ScaleAndSlideComponent } from './loading/scale-and-slide/scale-and-slide.component';
import { SurpriseComponent } from './loading/surprise/surprise.component';
import { SlideTitleDownBlocksComponent } from './loading/slide-title-down-blocks/slide-title-down-blocks.component';
import { Rotate3dComponent } from './loading/rotate3d/rotate3d.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FeaturesOfSiteComponent,
    ScrollSideComponent,
    PageExampleComponent,
    LeftUpComponent,
    RightUpComponent,
    FadeBackComponent,
    ScaleAndSlideComponent,
    SurpriseComponent,
    SlideTitleDownBlocksComponent,
    Rotate3dComponent,
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
