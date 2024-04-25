import {Component, inject} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Auth} from '@angular/fire/auth';
import {NgIf} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {login$, signInWithGoogle$} from "../../store/signals";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule, MatFormFieldModule, ReactiveFormsModule, NgIf, MatInput, MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  protected auth: Auth = inject(Auth);
  protected readonly signInWithGoogle$ = signInWithGoogle$;

  onSubmit() {
    if (this.loginForm.valid) {
      login$.set(this.loginForm.value);
    }
  }
}
