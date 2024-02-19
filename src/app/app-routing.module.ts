import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./core/components/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
