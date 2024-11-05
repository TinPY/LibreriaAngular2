import { HttpInterceptorFn } from '@angular/common/http';
import {catchError} from 'rxjs';

export const authInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('undec-token');

  if (!authToken) {
    const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.origin + window.location.pathname)))
    const authUrl = "https://vm01undec.riu.edu.ar:8443/cancerbero/auth/login?state=" + locationBase64
    window.location.assign(authUrl);
  }

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};

export const responseInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  return next(req)
      .pipe(
          catchError(error => {
            if (error.status === 403 || error.status === 401) {
              localStorage.clear();
              const authUrl = "https://vm01undec.riu.edu.ar:8443/cancerbero/auth/logout?logout_uri=" + window.location.origin + window.location.pathname + "logout"
              window.location.assign(authUrl);
            }
            throw error;
          })
      )
}
