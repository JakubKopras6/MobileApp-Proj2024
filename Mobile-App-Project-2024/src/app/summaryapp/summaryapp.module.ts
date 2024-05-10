import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryappPageRoutingModule } from './summaryapp-routing.module';

import { SummaryappPage } from './summaryapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryappPageRoutingModule
  ],
  declarations: [SummaryappPage]
})
export class SummaryappPageModule {}
