import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      mobile: ['09', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onMobileInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.value.startsWith('09')) {
      input.value = '09';
    }

    if (input.value.length > 11) {
      input.value = input.value.slice(0, 11);
    }

    this.signupForm.get('mobile')?.setValue(input.value);
  }

  alowOnlyNumber(event: KeyboardEvent) {
    const key = event.key;

    if (!/^\d$/.test(key)) {
      event.preventDefault();
    }
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;

      // ذخیره اطلاعات کاربر در localStorage
      localStorage.setItem('user', JSON.stringify(user));

      console.log('User Registered:', user);

      // هدایت به صفحه داشبورد
      this.router.navigate(['/dashboard']);
    }
  }
}
