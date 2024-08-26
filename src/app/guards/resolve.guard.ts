import { inject } from "@angular/core";
import { LoginConnectionService } from "../services/login-connection.service";

export const resole = () => {
  const obj = inject(LoginConnectionService)
  return obj.getRequest();
};
