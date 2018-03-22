import {Routes} from '@angular/router';
import {LaunchComponent} from "./views/launch/launch.component";

export const ROUTES: Routes = [
  {path: '', component: LaunchComponent},
  {path: '**', redirectTo: ''}
];
