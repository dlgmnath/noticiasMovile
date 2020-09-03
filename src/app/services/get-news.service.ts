import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ResTopHeadLines} from '../interfaces/interfaces'


// constantes de peticiones
const apiKey = environment.apiKey;
const apiURL = environment.apiURL;



@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  topHeadLines = 0;       //  contador de titulos de seleccion
  actualCategory = '';    // categoria actual
  categoryPage = 0;       // contador de paginas de categoria
  constructor( private http: HttpClient ) { }


 
  /**
 * @author Leonardo Gomez
 * @description Consumo de servicio de newsApi
 * @returns retorna todo la data del API
 */
  getTopHeadlines(){
   this.topHeadLines ++;
   return this.http.get<ResTopHeadLines>(`${apiURL}/everything?q=bitcoin&page=${this.topHeadLines}&from=2020-08-03&sortBy=publishedAt&apiKey=${apiKey}`);
  }

   /**
 * @author Leonardo Gomez
 * @description Consumo de servicio de newsApi por categorias
 * @param {string} category categoria por la cuals e estara enviando la peticion (obligatorio),  por defecto envia la primera pestaña.
 * @returns retorna data del APi segun la categoria
 */
  getTopHeadlinesCategories( category: string){
    if(this.actualCategory === category){
      this.categoryPage++;
    }else{
     this.categoryPage = 1;
     this.actualCategory = category; 
    }
    return this.http.get<ResTopHeadLines>(`${apiURL}/top-headlines?country=us&page=${this.categoryPage}&category=${category}&apiKey=${apiKey}`);
  }
}


