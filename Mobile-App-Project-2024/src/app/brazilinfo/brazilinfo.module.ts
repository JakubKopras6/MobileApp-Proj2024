import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { brazilinfoPageRoutingModule } from './brazilinfo-routing.module';

import { brazilinfoPage } from './brazilinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    brazilinfoPageRoutingModule
  ],
  declarations: [brazilinfoPage]
})
export class brazilinfoPageModule {}
