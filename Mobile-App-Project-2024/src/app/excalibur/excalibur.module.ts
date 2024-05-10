import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { excaliburPageRoutingModule } from './excalibur-routing.module';

import { excaliburPage } from './excalibur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    excaliburPageRoutingModule
  ],
  declarations: [excaliburPage]
})
export class excaliburPageModule {}
