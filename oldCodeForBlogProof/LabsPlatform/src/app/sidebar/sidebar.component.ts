import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  private open = false;

  constructor() { }

  toggleDetail(e){
    this.open = !this.open;

    let bar = <HTMLElement>document.getElementsByTagName("app-sidebar")[0];
    let container = document.getElementById("container");

    if(this.open == false){
     
    }
    else{
      
    }
  }

}
