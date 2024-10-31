import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private router;
    aplicacion: string;
    color_tema: string;
    mostrar_logo: boolean;
    constructor(router: Router);
    ngOnInit(): void;
    login(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "lib-login", never, { "aplicacion": { "alias": "aplicacion"; "required": false; }; "color_tema": { "alias": "color_tema"; "required": false; }; "mostrar_logo": { "alias": "mostrar_logo"; "required": false; }; }, {}, never, never, true, never>;
}
