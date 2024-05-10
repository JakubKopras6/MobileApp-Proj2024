import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { bladerunnerinfoPageRoutingModule } from './bladerunnerinfo-routing.module';

import { bladerunnerinfoPage } from './bladerunnerinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    bladerunnerinfoPageRoutingModule
  ],
  declarations: [bladerunnerinfoPage]
})
export class bladerunnerinfoPageModule {}
