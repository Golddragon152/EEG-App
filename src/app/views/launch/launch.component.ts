import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
  }

}
