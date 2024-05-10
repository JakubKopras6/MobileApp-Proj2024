import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { butchPage } from './butch.page';

const routes: Routes = [
  {
    path: '',
    component: butchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class butchPageRoutingModule {}
