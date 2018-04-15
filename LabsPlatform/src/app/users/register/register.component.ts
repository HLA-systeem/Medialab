import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public auth: AuthService;
  public name: string;
  public email: string;
  public password: string;
  public passwordRe: string;

  private error

  constructor(auth: AuthService){
    this.auth = auth;
   }

  ngOnInit() {
  }

  register(){
    if(this.password == this.passwordRe){
      let result = this.auth.register(this.email, this.password);
      
      this.name = '';
      this.email = '';
      this.password = '';
      this.passwordRe ='';
    }
    else{
      console.log("mismatch");
      this.auth.error = 'Het wachtwoord komt niet overeen met de bevestiging.'
    }
  }

}
