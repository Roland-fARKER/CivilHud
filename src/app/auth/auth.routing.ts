import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { Login } from './views/login/login';
import { Register } from './views/register/register';
import { RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
