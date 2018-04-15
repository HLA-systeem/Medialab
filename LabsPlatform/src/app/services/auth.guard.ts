import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  public user: Observable<firebase.User> = null;
  
  constructor(private fAuth: AngularFireAuth, private router: Router){
    this.user = fAuth.authState;
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | boolean {
      return this.user.map((auth) => {
        if(!auth){
          this.router.navigateByUrl('/login');
          return false;
        }
        return true;
      }).take(1);
  }
}
