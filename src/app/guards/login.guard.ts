import { CanActivateFn } from '@angular/router';
import { LoginConnectionService } from '../services/login-connection.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const obj = inject(LoginConnectionService)
  return obj.loginFlag;
};
