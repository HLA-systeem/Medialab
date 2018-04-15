import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  private auth:AuthService;
  
  constructor(auth: AuthService){
    this.auth = auth;
   }

  private logOut(){
    this.auth.logout();
  }


  ngOnInit() {
  }

}
