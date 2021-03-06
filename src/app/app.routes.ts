import {Routes} from '@angular/router';
import {LaunchComponent} from "./views/launch/launch.component";
import {HomeComponent} from "./views/home/home.component";
import {RecognizeComponent} from "./views/recognize/recognize.component";

export const ROUTES: Routes = [
  {path: '', component: LaunchComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recognize', component: RecognizeComponent},
  {path: '**', redirectTo: ''}
];
