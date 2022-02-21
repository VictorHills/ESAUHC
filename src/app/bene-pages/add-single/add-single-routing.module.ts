import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSinglePage } from './add-single.page';

const routes: Routes = [
  {
    path: '',
    component: AddSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSinglePageRoutingModule {}
