import { Article } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage'
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  news: Article[] = [];

  constructor( private storage : Storage) { }

  savenews(news: Article){
    const exist = this.news.find( res => res.title === news.title);

    if(!exist) {
      this.news.unshift(news);
      this.storage.set('favoritos',this.news);    
    } 
  }

  async loadnews(){
      const favs = await this.storage.get('favoritos');
      if (favs){
        this.news = favs;
      }
    }
}
