import {effect, Injectable} from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from "@angular/fire/auth";
import {login$, register$, showToast$, signInWithGoogle$, signout$} from "./signals";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AppEffects {

  register = effect(() => {
    const details = register$();
    if (details) {
      createUserWithEmailAndPassword(this.auth, details.email, details.password)
        .then(userCredential => {
          updateProfile(userCredential.user, {
            displayName: `${details.firstName} ${details.lastName}`
          }).then(() => {
            showToast$.set('Successfully Registered')
          }).catch(error => {
            showToast$.set(error.message)
          })
          this.router.navigate(['/dashboard']).catch(console.error);
        }).catch(error => {
        showToast$.set(error.message);
      })
    }
  })

  login = effect(() => {
    const details = login$();
    if (details) {
      signInWithEmailAndPassword(this.auth, details.email, details.password)
        .then(userCredential => {
          this.router.navigate(['/dashboard']).catch(console.error);
        })
        .catch(error => {
          showToast$.set(error.message);
        })
    }
  })

  signInWithGoogle = effect(() => {
    if (signInWithGoogle$()) {
      signInWithPopup(this.auth, new GoogleAuthProvider())
        .then(() => {
          showToast$.set('Successfully Signed in with Google')
          this.router.navigate(['/dashboard']).catch(console.error);
        })
        .catch(error => showToast$.set(error.message))
    }
  }, {allowSignalWrites: true})

  signout = effect(() => {
    if (signout$()) {
      this.auth.signOut()
        .then(() => {
          showToast$.set('Successfully Signed out')
          this.router.navigate(['/']).catch(console.error);
        })
        .catch(error => showToast$.set(error.message))
    }
  })

  showToast = effect(() => {
    if (showToast$()) {
      this.snackBar.open(showToast$(), 'close', {duration: 2000})
    }
  })

  constructor(private auth: Auth,
              private router: Router,
              private snackBar: MatSnackBar) {
  }
}
