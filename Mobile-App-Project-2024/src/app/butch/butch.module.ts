import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { butchPageRoutingModule } from './butch-routing.module';

import { butchPage } from './butch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    butchPageRoutingModule
  ],
  declarations: [butchPage]
})
export class butchPageModule {}
