import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private token: TokenService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobile: [
        '',
        // [
        //   Validators.required,
        //   Validators.pattern(/^09\d{9}$/), // Validate Iranian mobile numbers
        // ],
      ],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // if (this.loginForm.valid) {
    //   this.isLoading = true; // فعال کردن حالت بارگذاری
    //   console.log('Login Data:', this.loginForm.value);
    const data = {
      userName: '0480929696',
      password: '@Ab123456',
      captchaId: 0,
      captchaValue: '123',
    };
    this.userService.login(data).subscribe({
      next: (res) => {
        if (res) {
          console.log('Login successful:', res);
          this.loginForm.reset();
          this.token.setToken(res.data);
          this.router.navigate(['/']);
        } else {
          console.error('Invalid credentials');
        }
      },
      error: (err) => {
        console.error('An error occurred:', err);
        alert('خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
      },
    });
    // this.userService.getUser(this.loginForm.value).subscribe({
    //   next: (res) => {
    //     this.isLoading = false; // غیرفعال کردن حالت بارگذاری
    //     if (res) {
    //       console.log('Login successful:', res);

    //       this.loginForm.reset();
    //       this.router.navigate(['/']);
    //     } else {
    //       console.error('Invalid credentials');
    //       // alert('شماره موبایل یا رمز عبور اشتباه است.');
    //     }
    //   },
    //   error: (err) => {
    //     this.isLoading = false; // غیرفعال کردن حالت بارگذاری
    //     console.error('An error occurred:', err);
    //     alert('خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
    //   },
    // });
    // }
  }
}
