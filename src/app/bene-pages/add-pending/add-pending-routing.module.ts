import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPendingPage } from './add-pending.page';

const routes: Routes = [
  {
    path: '',
    component: AddPendingPage
  },
  {
    path: 'single',
    loadChildren: () => import('./single/single.module').then( m => m.SinglePageModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./group/group.module').then( m => m.GroupPageModule)
  },
  {
    path: 'family',
    loadChildren: () => import('./family/family.module').then( m => m.FamilyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPendingPageRoutingModule {}
