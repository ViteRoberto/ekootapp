import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
  // { path: 'acs', loadChildren: './acs/acs.module#AcsPageModule' },
  // { path: 'empresas', loadChildren: './empresas/empresas.module#EmpresasPageModule' },
  // { path: 'modalReto', loadChildren: './modal-reto/modal-reto.module#ModalRetoPageModule' },
  // { path: 'animales', loadChildren: './animales/animales.module#AnimalesPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
