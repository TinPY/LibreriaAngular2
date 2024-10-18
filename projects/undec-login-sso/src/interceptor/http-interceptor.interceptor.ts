import { HttpInterceptorFn } from '@angular/common/http';
import {catchError} from 'rxjs';

export const authInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('undec-token');

  if (!authToken) {
    const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.href)))
    const authUrl = "http://localhost:8899/auth/login?state=" + locationBase64
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
              const authUrl = "http://localhost:8899/auth/logout?logout_uri=" + window.location.origin + "/logout"
              window.location.assign(authUrl);
            }
            throw error;
          })
      )
}
