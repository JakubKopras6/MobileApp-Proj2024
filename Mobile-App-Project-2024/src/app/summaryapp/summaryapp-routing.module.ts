import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryappPage } from './summaryapp.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryappPageRoutingModule {}
