import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { butchinfoPage } from './butchinfo.page';

const routes: Routes = [
  {
    path: '',
    component: butchinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class butchinfoPageRoutingModule {}
