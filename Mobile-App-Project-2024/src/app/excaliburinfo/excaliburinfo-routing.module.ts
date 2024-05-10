import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { excaliburinfoPage } from './excaliburinfo.page';

const routes: Routes = [
  {
    path: '',
    component: excaliburinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class excaliburinfoPageRoutingModule {}
