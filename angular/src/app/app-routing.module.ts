import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  {
    path: 'loginpage',
    component: LoginPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'collaborations',
    loadChildren: () => import('./collaborations/collaborations.module').then(m => m.CollaborationsModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/loginpage',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
