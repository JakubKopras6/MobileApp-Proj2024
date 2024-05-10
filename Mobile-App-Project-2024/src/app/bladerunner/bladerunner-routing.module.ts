import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { bladerunnerPage } from './bladerunner.page';

const routes: Routes = [
  {
    path: '',
    component: bladerunnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class bladerunnerPageRoutingModule {}
