import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor(public globalService: GlobalService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/home']);
  }

}
