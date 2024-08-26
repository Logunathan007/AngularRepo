import { CanActivateFn } from '@angular/router';
import { LoginConnectionService } from '../services/login-connection.service';
import { inject } from '@angular/core';

export const childGuard: CanActivateFn = (route, state) => {
  var obj = inject(LoginConnectionService)
  return obj.loginFlagChild;
};
