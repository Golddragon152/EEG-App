import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LaunchComponent} from './views/launch/launch.component';
import {GlobalService} from "./services/global.service";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {HomeComponent} from './views/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RecognizeComponent} from './views/recognize/recognize.component';
import { StepOneComponent } from './components/step-one/step-one.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecognizeComponent,
    StepOneComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
