import { Component, OnInit } from '@angular/core';
import { BadgeclassService } from '../services/badgeclass.service';
import { Badgeclass } from '../interfaces/badgeclass';


@Component({
  selector: 'app-badgeGallery',
  templateUrl: './badge-select-screen.component.html',
  styleUrls: ['./badge-select-screen.component.css']
})

export class BadgeSelectComponent implements OnInit{
  private bcService: BadgeclassService
  private badgeclasses: Badgeclass[];
  
  constructor(bcService: BadgeclassService){
    this.bcService = bcService;
  }

  ngOnInit() {
    this.bcService.get().subscribe(badgeclasses => {
      this.badgeclasses = badgeclasses;
      console.log(this.badgeclasses);
    });
  }
}