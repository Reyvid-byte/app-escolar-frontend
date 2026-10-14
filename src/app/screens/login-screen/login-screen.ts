import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NgxMaskDirective } from 'ngx-mask'



export class LoginScreen {
  private cookies = inject(CookieService);

  constructor() {
    this.cookies.set('sesion', 'valor');
    const valor = this.cookies.get('sesion');
  }
}   