import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenKey = 'authToken'; // کلید ذخیره توکن در localStorage

  // ذخیره توکن
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // دریافت توکن
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // حذف توکن
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // بررسی وجود توکن
  hasToken(): boolean {
    return !!this.getToken();
  }
}
