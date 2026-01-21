import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../../globalService/auth-service/auth-service';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if(authService.isAuthenticated()){
    return true;
  }
  console.warn("Redirecting...")
  return router.parseUrl("/auth/login");
};
