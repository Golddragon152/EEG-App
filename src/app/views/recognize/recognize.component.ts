import {Component, ElementRef, Inject, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-recognize',
  templateUrl: './recognize.component.html',
  styleUrls: ['./recognize.component.css']
})

export class RecognizeComponent implements OnInit {

  private elementRef: ElementRef;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).find('.stepper').activateStepper();
  }

}
