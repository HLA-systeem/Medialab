import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  public authState: any = null;
  private authenticated: boolean = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = afAuth.authState;
          this.authenticated = true;
        }
      });
  }

  googleLogin(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result)=>{
      this.authenticated = true;
      console.log('Signed in successfully!');
      this.router.navigate(['/profile']);
      }).catch((error)=>{
          this.authenticated = false;
          console.log('Error signing in: ',error);
        })
  }

  logout() {
    console.log('logout');

    this.afAuth.auth.signOut().then((result)=>{
      this.router.navigate(['']).then(function(){
      window.location.reload();
      this.authenticated = false;
      });
      console.log('You were logged out successfully!');
    }).catch((error) =>{
     this.authenticated = true;
     console.log('Error signing out: ',error);
    })
   }

   isAuth(){
     if (this.authenticated == true){
       console.log("O great and holy mother");
       return true;
     }
     else{
       console.log("Let it go and move on");
       this.router.navigate(['/login']);
       return false; 
     }
     
   }


  
  /*

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }


  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.idCol}`);

    const data: User = {
      idCol: user.idCol,
      name: user.name,
      email: user.email,
      avatar: user.avatar, 
      description: user.description,
      skills: user.skills,
      badges: user.badges,
    }

    return userRef.set(data, { merge: true })

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/login']);
    });
  }*/
}
