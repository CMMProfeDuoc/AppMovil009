import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'item',
    children : [
      {
        path: '',
        loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
      },
      {
        path: 'add',
        loadChildren:() => import('./item/add/add.module').then(m => m.AddPageModule)
      },
      {
        path: ':itemId',
        loadChildren:() => import('./item/detail/detail.module').then(m=> m.DetailPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
