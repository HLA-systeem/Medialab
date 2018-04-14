import { Component, OnInit } from '@angular/core';
import { BadgeclassService } from '../services/badgeclass.service';
import { Badgeclass } from '../interfaces/badgeclass';

@Component({
  selector: 'app-badge-upload-screen',
  templateUrl: './badge-upload-screen.component.html',
  styleUrls: ['./badge-upload-screen.component.css']
})
export class BadgeUploadScreenComponent implements OnInit {
  public badge:Badgeclass = {
    "@context": "https://w3id.org/openbadges/v2",
    type: "BadgeClass",
    id: '',
    name: '',
    description: '',
    image: 'http://project.cmi.hr.nl/2017_2018/mlab_labflab_t2/openbadges/images/monkeyDude.png', //select on the previous screen
    criteria: '',
    tags: [],
    issuer: '', //get from cookie
  }
  private bcService: BadgeclassService;


  constructor(bcService: BadgeclassService){
    this.bcService = bcService;
   }

  ngOnInit() {
    if(this.badge.name != '' && this.badge.description != ''&& this.badge.image != '' && this.badge.criteria != '' && this.badge.issuer != ''){
      this.bcService.post(this.badge);
    }
  }

}
