import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mockUsers } from '../mock/users.mock';
import { BaseHTTPService } from './baseHTTP.service';
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _baseApiService: BaseHTTPService) {}

  getUser(data: { mobile: string; password: string }) {
    const user = mockUsers.find(
      (u) => u.mobile === data.mobile && u.password === data.password
    );
    return of(user);
  }

  login(body: any): Observable<any> {
    // const body = { userName, password, captchaId, captchaValue };
    return this._baseApiService.post<any>(`v1/User/Login`, body);
  }
}
