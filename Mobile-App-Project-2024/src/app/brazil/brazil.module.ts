import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { brazilPageRoutingModule } from './brazil-routing.module';

import { brazilPage } from './brazil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    brazilPageRoutingModule
  ],
  declarations: [brazilPage]
})
export class brazilPageModule {}
