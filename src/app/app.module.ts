import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LaunchComponent } from './views/launch/launch.component';
import {GlobalService} from "./services/global.service";


@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
