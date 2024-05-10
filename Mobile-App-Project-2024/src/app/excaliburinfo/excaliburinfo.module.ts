import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { excaliburinfoPageRoutingModule } from './excaliburinfo-routing.module';

import { excaliburinfoPage } from './excaliburinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    excaliburinfoPageRoutingModule
  ],
  declarations: [excaliburinfoPage]
})
export class excaliburinfoPageModule {}
