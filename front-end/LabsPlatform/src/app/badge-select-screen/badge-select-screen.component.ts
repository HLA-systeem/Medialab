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
  
  
  constructor(bcService: BadgeclassService){
    this.bcService = bcService;
    bcService.watch(this);
  }

  private badgeSelected(event){
    console.log(event.target);
  }

  recieveUpdate(){
    this.badgeclasses = this.bcService.get();
  }
}