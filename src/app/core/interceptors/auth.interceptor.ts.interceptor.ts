import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  customHeader() {
    return 'true';
  }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    if (token) {
      console.log('bearer token ', token);
      const cloned = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          // 'Custom-Header': this.customHeader() ? this.customHeader() : '',
        },
      });
      return next.handle(cloned);
    }

    return next.handle(request);
  }
}
