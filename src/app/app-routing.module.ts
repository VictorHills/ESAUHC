import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'beneficiaries',
    loadChildren: () => import('./pages/beneficiaries/beneficiaries.module').then( m => m.BeneficiariesPageModule)
  },
  {
    path: 'mail',
    loadChildren: () => import('./pages/mail/mail.module').then( m => m.MailPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'earning',
    loadChildren: () => import('./pages/earning/earning.module').then( m => m.EarningPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'active',
    loadChildren: () => import('./bene-pages/active/active.module').then( m => m.ActivePageModule)
  },
  {
    path: 'add-single',
    loadChildren: () => import('./bene-pages/add-single/add-single.module').then( m => m.AddSinglePageModule)
  },
  {
    path: 'add-group',
    loadChildren: () => import('./bene-pages/add-group/add-group.module').then( m => m.AddGroupPageModule)
  },
  {
    path: 'add-family',
    loadChildren: () => import('./bene-pages/add-family/add-family.module').then( m => m.AddFamilyPageModule)
  },
  {
    path: 'add-pending',
    loadChildren: () => import('./bene-pages/add-pending/add-pending.module').then( m => m.AddPendingPageModule)
  },
  {
    path: 'add-total',
    loadChildren: () => import('./bene-pages/add-total/add-total.module').then( m => m.AddTotalPageModule)
  },
  {
    path: 'family-list',
    loadChildren: () => import('./bene-pages/family-list/family-list.module').then( m => m.FamilyListPageModule)
  },
  {
    path: 'group-list',
    loadChildren: () => import('./bene-pages/group-list/group-list.module').then( m => m.GroupListPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
