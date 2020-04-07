import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesOfSiteComponent } from './features-of-site/features-of-site.component';
import {RouterModule} from '@angular/router';
import {UitRoutingAnimationLibModule} from "uit-routing-animation-lib";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FeaturesOfSiteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent },
      { path: 'features', component: FeaturesOfSiteComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
