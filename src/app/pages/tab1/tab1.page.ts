import { GetNewsService } from './../../services/get-news.service';
import { Component, OnInit } from '@angular/core';

import {Article} from '../../interfaces/interfaces'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  news: Article[] = [];
  constructor(private getNews: GetNewsService) {}

  ngOnInit(){
    this.getNews.getTopHeadlines()
      .subscribe( res => {
        this.news.push( ...res.articles);
    });
  }

/**
 * @author Leonardo Gomez
 * @description Carga de informacion segun el eevento seleccionado.
 */
loadData(event){
  this.loadNews(event);
}


/**
 * @author Leonardo Gomez
 * @description Carga las noticias segun ele vento seleccionado.
 */
loadNews( event? ){
  this.getNews.getTopHeadlines()
    .subscribe( res => {

      if(res.articles.length === 0){
        event.target.disabled = true;
        event.target.complete();
      }
      this.news.push( ...res.articles);

      if(event){
        event.target.complete();
      }
    });
}

}