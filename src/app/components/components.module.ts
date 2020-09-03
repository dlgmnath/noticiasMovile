import { NewsComponent } from './news/news.component';
import { NewComponent } from './new/new.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    NewsComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NewsComponent
  ]
})
export class ComponentsModule { }
