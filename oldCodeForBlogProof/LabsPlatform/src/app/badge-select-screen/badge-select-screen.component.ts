import { Component } from '@angular/core';
import { BadgeclassService } from '../services/badgeclass.service';


@Component({
  selector: 'app-badgeGallery',
  templateUrl: './badge-select-screen.component.html',
  styleUrls: ['./badge-select-screen.component.css']
})

export class BadgeSelectComponent implements Observer{
  private bcService: BadgeclassService
  private badgeclasses: any[];
  private open = false;
  
  constructor(bcService: BadgeclassService){
    this.bcService = bcService;
    bcService.watch(this);
  }

  private badgeSelected(e,status){
    console.log(status);
    //e.target.style.
    //pop out side bar with info;
  }

  recieveUpdate(){
    this.badgeclasses = this.bcService.get();
    this.badgeclasses.forEach((item,index) => {
      console.log(this.badgeclasses[index]);
    });
  }
}