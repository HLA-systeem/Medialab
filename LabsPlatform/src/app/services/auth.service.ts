import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public uid: string;
  public error: string;
  public rB = false;

  constructor(private fAuth: AngularFireAuth, private router: Router) {
    this.fAuth.authState.subscribe((auth)=>{
      if(auth !== undefined && auth !== null){
        this.uid = auth.uid
      }
    });
  }

  register(email: string, password: string): string{
    this.fAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/profile']);
        return 'registering...';
      })
      .catch(err => {
        this.error = err.message;
      });

    return 'registratie mislukt';
  }

  login(email: string, password: string){
    this.fAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.router.navigate(['/profile']);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }

  logout(){
    this.fAuth.auth.signOut().then(() => {
      this.rB = true;
      this.router.navigate(['/login']);
    });
  }

  loginGoogle(){
    this.fAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(value => {
      console.log('Google Login Success!', value);
      this.router.navigate(['/profile']);
    });
  }
}