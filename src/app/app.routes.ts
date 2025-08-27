import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { FormPage } from './pages/form/form.page';
import { PreviewPage } from './pages/preview/preview.page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: FormPage },
  { path: 'preview', component: PreviewPage },
];

// export const routes: Routes = [
  
//   {
//     path: '',
//     redirectTo: 'form',
//     pathMatch: 'full'
//   },
//   {
//     path: 'form',
//     loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
//   },
//   {
//     path: 'preview',
//     loadChildren: () => import('./pages/preview/preview.module').then( m => m.PreviewPageModule)
//   },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
