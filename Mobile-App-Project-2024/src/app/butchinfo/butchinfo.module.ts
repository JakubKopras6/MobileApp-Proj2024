import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { butchinfoPageRoutingModule } from './butchinfo-routing.module';

import { butchinfoPage } from './butchinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    butchinfoPageRoutingModule
  ],
  declarations: [butchinfoPage]
})
export class butchinfoPageModule {}
