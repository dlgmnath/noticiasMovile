import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../../interfaces/interfaces'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {


  @Input() news: Article[] = []; // variable de recepcion para data tipo Article
  constructor() { }

  ngOnInit() {}

}
