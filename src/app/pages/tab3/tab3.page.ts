import { Component } from '@angular/core';
import { LocaldataService } from '../../services/localdata.service';
import { DefaultUrlSerializer } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 sliderOptions = {
    allowsSlidePrev: false,
    allowSlideNext: false
  }

  constructor( public localdataService:LocaldataService) {}



}
