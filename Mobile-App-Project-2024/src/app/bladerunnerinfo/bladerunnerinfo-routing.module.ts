import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { bladerunnerinfoPage } from './bladerunnerinfo.page';

const routes: Routes = [
  {
    path: '',
    component: bladerunnerinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class bladerunnerinfoPageRoutingModule {}
