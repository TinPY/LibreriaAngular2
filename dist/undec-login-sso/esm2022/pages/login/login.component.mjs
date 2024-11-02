import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
export class LoginComponent {
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
        const authUrl = "https://vm01undec.riu.edu.ar:8443/cancerbero/auth/login?state=" + locationBase64;
        window.location.assign(authUrl);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LoginComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: LoginComponent, isStandalone: true, selector: "lib-login", inputs: { aplicacion: "aplicacion", color_tema: "color_tema", mostrar_logo: "mostrar_logo" }, ngImport: i0, template: "<div class=\"container-fluid bg-dark h-100\">\r\n    <div class=\"row align-items-center h-100\">\r\n        <div class=\"col-md-3 col-lg-4\"></div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card mb-5\">\r\n                <div class=\"card-header text-light text-center h4\">\r\n                    <img src=\"assets/img/undec.png\" alt=\"undec\" *ngIf=\"mostrar_logo\">\r\n                    <h4 class=\"card-title text-primary\">Aplicacion UNdeC - {{aplicacion}}</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row pt-2\">\r\n                        <div class=\"col-12\">\r\n                            <button (click)=\"login()\" class=\"btn btn-primary w-100 mb-2\" type=\"submit\">\r\n                                <i class=\"fas fa-sign-in-alt\"></i> Ingresar\r\n                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" hidden=\"true\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-lg-4\"></div>\r\n    </div>\r\n</div>\r\n\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"container-fluid bg-dark h-100\">\r\n    <div class=\"row align-items-center h-100\">\r\n        <div class=\"col-md-3 col-lg-4\"></div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card mb-5\">\r\n                <div class=\"card-header text-light text-center h4\">\r\n                    <img src=\"assets/img/undec.png\" alt=\"undec\" *ngIf=\"mostrar_logo\">\r\n                    <h4 class=\"card-title text-primary\">Aplicacion UNdeC - {{aplicacion}}</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row pt-2\">\r\n                        <div class=\"col-12\">\r\n                            <button (click)=\"login()\" class=\"btn btn-primary w-100 mb-2\" type=\"submit\">\r\n                                <i class=\"fas fa-sign-in-alt\"></i> Ingresar\r\n                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" hidden=\"true\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-lg-4\"></div>\r\n    </div>\r\n</div>\r\n\r\n" }]
        }], ctorParameters: () => [{ type: i1.Router }], propDecorators: { aplicacion: [{
                type: Input
            }], color_tema: [{
                type: Input
            }], mostrar_logo: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdW5kZWMtbG9naW4tc3NvL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91bmRlYy1sb2dpbi1zc28vc3JjL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFTN0MsTUFBTSxPQUFPLGNBQWM7SUFNekIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKekIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBR3ZDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25HLE1BQU0sT0FBTyxHQUFHLGdFQUFnRSxHQUFHLGNBQWMsQ0FBQTtRQUNqRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOytHQW5CVSxjQUFjO21HQUFkLGNBQWMsbUtDWjNCLDZ2Q0EwQkEseUREbEJZLFlBQVksa0lBQUUsbUJBQW1COzs0RkFJaEMsY0FBYztrQkFQMUIsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDOzJFQU1uQyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxvZ2luJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5jc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgQElucHV0KCkgYXBsaWNhY2lvbiA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbG9yX3RlbWEgPSAnJztcclxuICBASW5wdXQoKSBtb3N0cmFyX2xvZ286IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuZGVjLXRva2VuJykpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ2luKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9jYXRpb25CYXNlNjQgPSB3aW5kb3cuYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiIy9ob21lXCIpKSlcclxuICAgIGNvbnN0IGF1dGhVcmwgPSBcImh0dHBzOi8vdm0wMXVuZGVjLnJpdS5lZHUuYXI6ODQ0My9jYW5jZXJiZXJvL2F1dGgvbG9naW4/c3RhdGU9XCIgKyBsb2NhdGlvbkJhc2U2NFxyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihhdXRoVXJsKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBiZy1kYXJrIGgtMTAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtbGctNFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHRleHQtbGlnaHQgdGV4dC1jZW50ZXIgaDRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvdW5kZWMucG5nXCIgYWx0PVwidW5kZWNcIiAqbmdJZj1cIm1vc3RyYXJfbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1wcmltYXJ5XCI+QXBsaWNhY2lvbiBVTmRlQyAtIHt7YXBsaWNhY2lvbn19PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJsb2dpbigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDAgbWItMlwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaWduLWluLWFsdFwiPjwvaT4gSW5ncmVzYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtbGctNFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIl19