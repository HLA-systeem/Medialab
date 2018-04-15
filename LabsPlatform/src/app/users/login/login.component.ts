import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public auth: AuthService;
  public email: string;
  public password: string;

  constructor(auth: AuthService){
    this.auth = auth;
   }

  ngOnInit() {
  }
  
  login(){
    this.auth.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout(){
    this.auth.logout();
  }
  

}
