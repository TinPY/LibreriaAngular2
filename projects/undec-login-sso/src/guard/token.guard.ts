import { CanActivateFn } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

let redirectCount = 0;

export const tokenGuard: CanActivateFn = (route) => {
  const localStorageToken = localStorage.getItem('undec-token');
  if (localStorageToken) {
    return true;
  }

  const tokenQueryParams = route.queryParamMap.get('idToken');
  if (tokenQueryParams) {
    const decodedToken: { [key: string]: string } = jwt_decode.jwtDecode(tokenQueryParams);
    localStorage.setItem('user', decodedToken['email']);
    localStorage.setItem('undec-token', tokenQueryParams);
    return true;
  }

  if (redirectCount === 0) {
    const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.origin + window.location.pathname + "#/home")))
    const authUrl = "https://vm01undec.riu.edu.ar:8443/cancerbero/auth/login?state=" + locationBase64
    redirectCount = 1;
    window.location.assign(authUrl);
  }

  return false;
};
