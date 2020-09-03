import { Article } from './../../interfaces/interfaces';
import { GetNewsService } from './../../services/get-news.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
 @ViewChild(IonSegment) segment: IonSegment;
  categories = ['business','entertainment','general','health','science','sport','technology'];
  news: Article[] = [];
  constructor( private getNewsService: GetNewsService){

  }
    ngOnInit(){
      //this.segment.value = this.categories[0];
      this.loadNews(this.categories[0]);
    }

    changeCategory(event){
      this.loadNews(event.detail.value);
    }

    /**
 * @author Leonardo Gomez
 * @description Carga noticias en funcion a la categoria seleccionada
 */

    loadNews(category: string, event?){
      this.news = [];
      this.getNewsService.getTopHeadlinesCategories(category).
      subscribe(res =>{
        this.news.push(...res.articles);

        if(event){
          event.target.complete();
        }
      });
    }

    /**
 * @author Leonardo Gomez
 * @description carga la data que sera mostrada.
 */
    loadData(event){
      this.loadNews(this.segment.value, event);

    }
}
