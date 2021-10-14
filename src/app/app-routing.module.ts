import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingredientes',
    loadChildren: () => import('./ingredientes/ingredientes.module').then( m => m.IngredientesPageModule)
  },
  {
    path: 'preparacion',
    loadChildren: () => import('./preparacion/preparacion.module').then( m => m.PreparacionPageModule)
  },
  {
    path: 'cocteles',
    loadChildren: () => import('./cocteles/cocteles.module').then( m => m.CoctelesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
