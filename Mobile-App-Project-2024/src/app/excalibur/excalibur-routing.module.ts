import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { excaliburPage } from './excalibur.page';

const routes: Routes = [
  {
    path: '',
    component: excaliburPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class excaliburPageRoutingModule {}
