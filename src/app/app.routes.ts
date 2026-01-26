import { Routes } from '@angular/router';
import {MainLayout} from './layouts/main-layout/main-layout';
import {HomeComponent} from './components/home-component/home-component';
import {AuthLayout} from './layouts/auth-layout/auth-layout';
import {SignupComponent} from './components/signup-component/signup-component';
import {LoginComponent} from './components/login-component/login-component';
import {authGuard} from './core/guards/auth/auth-guard';
import {ProfileComponent} from './components/profile-component/profile-component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    // canActivate: [authGuard],
    children:[
      { path: '', component: HomeComponent, title: 'Msgify | Home' },
      { path: 'profile', component: ProfileComponent, title: 'Msgify | Profile'}
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
