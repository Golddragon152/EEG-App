import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LaunchComponent } from './views/launch/launch.component';
import {GlobalService} from "./services/global.service";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
