import {Component, inject} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Auth, GoogleAuthProvider} from "@angular/fire/auth";
import {register$, signInWithGoogle$} from "../../store/signals";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

const provider = new GoogleAuthProvider();

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInput,
    NgIf,
    MatButton,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  protected readonly signInWithGoogle$ = signInWithGoogle$;
  private auth: Auth = inject(Auth);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  onSubmit() {
    if (this.registrationForm.valid) {
      register$.set(this.registrationForm.value);
    }
  }
}
