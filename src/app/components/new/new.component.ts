import { Article } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';


import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LocaldataService } from '../../services/localdata.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() new: Article;   // variables de recepcion pata interfaz de ARTICLE
  @Input() index: number;  // variable de recepcion apra numero de noticia
  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private localDataService: LocaldataService ) { }

  ngOnInit() {}
 /**
 * @description visualiza las noticias
 */
  viewNew(){
    const browser = this.iab.create(this.new.url, '_system');
  }

  /**
 * @description lanza el menu de opciones para las noticias
 */
  async launchMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.new.title,
            this.new.source.name,
            '',
            this.new.url)
        }
      }, {
        text: 'Guardar en favoritos',
        icon: 'star',
        handler: () => {
          console.log('Favorito');
          this.localDataService.savenews(this.new);
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
