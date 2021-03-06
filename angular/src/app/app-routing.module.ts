import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: 'loginpage', component: LoginPageComponent },
  { path: 'collaborations', loadChildren: () => import('./collaborations/collaborations.module').then(m => m.CollaborationsModule) },
  { path: '', redirectTo: '/loginpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
