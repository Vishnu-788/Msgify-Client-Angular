import { Routes } from '@angular/router';
import {MainLayout} from './layouts/main-layout/main-layout';
import {HomeComponent} from './components/home-component/home-component';
import {AuthLayout} from './layouts/auth-layout/auth-layout';
import {SignupComponent} from './components/signup-component/signup-component';
import {LoginComponent} from './components/login-component/login-component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children:[
      { path: '', component: HomeComponent, title: 'Msgify | Home' }
    ]
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: 'signup', component: SignupComponent, title: 'Msgify | Signup' },
      { path: 'login', component: LoginComponent, title: 'Msgify | Login' }
    ]
  }
];
