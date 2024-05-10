import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { brazilinfoPage } from './brazilinfo.page';

const routes: Routes = [
  {
    path: '',
    component: brazilinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class brazilinfoPageRoutingModule {}
