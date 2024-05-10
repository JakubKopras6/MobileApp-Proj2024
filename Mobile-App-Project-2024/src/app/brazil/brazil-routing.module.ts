import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { brazilPage } from './brazil.page';

const routes: Routes = [
  {
    path: '',
    component: brazilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class brazilPageRoutingModule {}
