import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { catchError } from 'rxjs';
import * as i1 from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class UndecLoginSsoService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UndecLoginSsoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UndecLoginSsoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UndecLoginSsoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class UndecLoginSsoComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UndecLoginSsoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UndecLoginSsoComponent, isStandalone: true, selector: "lib-undec-login-sso", ngImport: i0, template: `
    <p>
      undec-login-sso works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UndecLoginSsoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-undec-login-sso', standalone: true, imports: [], template: `
    <p>
      undec-login-sso works!
    </p>
  ` }]
        }] });

let redirectCount = 0;
const tokenGuard = (route) => {
    const localStorageToken = localStorage.getItem('undec-token');
    if (localStorageToken) {
        return true;
    }
    const tokenQueryParams = route.queryParamMap.get('idToken');
    if (tokenQueryParams) {
        const decodedToken = jwt_decode.jwtDecode(tokenQueryParams);
        localStorage.setItem('user', decodedToken['email']);
        localStorage.setItem('undec-token', tokenQueryParams);
        return true;
    }
    if (redirectCount === 0) {
        const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.origin + "#/home")));
        const authUrl = "http://localhost:8899/auth/login?state=" + locationBase64;
        redirectCount = 1;
        window.location.assign(authUrl);
    }
    return false;
};

const authInterceptorFunctional = (req, next) => {
    const authToken = localStorage.getItem('undec-token');
    if (!authToken) {
        const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.href)));
        const authUrl = "http://localhost:8899/auth/login?state=" + locationBase64;
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
const responseInterceptorFunctional = (req, next) => {
    return next(req)
        .pipe(catchError(error => {
        if (error.status === 403 || error.status === 401) {
            localStorage.clear();
            const authUrl = "http://localhost:8899/auth/logout?logout_uri=" + window.location.origin + "/logout";
            window.location.assign(authUrl);
        }
        throw error;
    }));
};

class LoginComponent {
    constructor(router) {
        this.router = router;
        this.aplicacion = '';
        this.color_tema = '';
        this.mostrar_logo = false;
    }
    ngOnInit() {
        if (localStorage.getItem('undec-token')) {
            this.router.navigate(['/home']);
        }
    }
    login() {
        const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.origin + "#/home")));
        const authUrl = "http://localhost:8899/auth/login?state=" + locationBase64;
        window.location.assign(authUrl);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LoginComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: LoginComponent, isStandalone: true, selector: "lib-login", inputs: { aplicacion: "aplicacion", color_tema: "color_tema", mostrar_logo: "mostrar_logo" }, ngImport: i0, template: "<div class=\"container-fluid bg-dark h-100\">\r\n    <div class=\"row align-items-center h-100\">\r\n        <div class=\"col-md-3 col-lg-4\"></div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card mb-5\">\r\n                <div class=\"card-header text-light text-center h4\">\r\n                    <img src=\"@node_modules/undec-login-sso/assets/img/undec.png\" alt=\"undec\" *ngIf=\"mostrar_logo\">\r\n                    <h4 class=\"card-title text-primary\">Aplicacion UNdeC - {{aplicacion}}</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row pt-2\">\r\n                        <div class=\"col-12\">\r\n                            <button (click)=\"login()\" class=\"btn btn-primary w-100 mb-2\" type=\"submit\">\r\n                                <i class=\"fas fa-sign-in-alt\"></i> Ingresar\r\n                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" hidden=\"true\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-lg-4\"></div>\r\n    </div>\r\n</div>\r\n\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"container-fluid bg-dark h-100\">\r\n    <div class=\"row align-items-center h-100\">\r\n        <div class=\"col-md-3 col-lg-4\"></div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card mb-5\">\r\n                <div class=\"card-header text-light text-center h4\">\r\n                    <img src=\"@node_modules/undec-login-sso/assets/img/undec.png\" alt=\"undec\" *ngIf=\"mostrar_logo\">\r\n                    <h4 class=\"card-title text-primary\">Aplicacion UNdeC - {{aplicacion}}</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row pt-2\">\r\n                        <div class=\"col-12\">\r\n                            <button (click)=\"login()\" class=\"btn btn-primary w-100 mb-2\" type=\"submit\">\r\n                                <i class=\"fas fa-sign-in-alt\"></i> Ingresar\r\n                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" hidden=\"true\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-lg-4\"></div>\r\n    </div>\r\n</div>\r\n\r\n" }]
        }], ctorParameters: () => [{ type: i1.Router }], propDecorators: { aplicacion: [{
                type: Input
            }], color_tema: [{
                type: Input
            }], mostrar_logo: [{
                type: Input
            }] } });

/*
 * Public API Surface of undec-login-sso
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoginComponent, UndecLoginSsoComponent, UndecLoginSsoService, authInterceptorFunctional, responseInterceptorFunctional, tokenGuard };
//# sourceMappingURL=undec-login-sso.mjs.map
