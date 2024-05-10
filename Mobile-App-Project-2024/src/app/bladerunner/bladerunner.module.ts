import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { bladerunnerPageRoutingModule } from './bladerunner-routing.module';

import { bladerunnerPage } from './bladerunner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    bladerunnerPageRoutingModule
  ],
  declarations: [bladerunnerPage]
})
export class bladerunnerPageModule {}
