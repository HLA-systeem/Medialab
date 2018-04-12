import {Component, OnInit} from '@angular/core';
import {Badgeclass} from "../../../../LabsPlatform/src/app/interfaces/badgeclass";
import {BadgeclassService} from "../../../../LabsPlatform/src/app/services/badgeclass.service";

@Component({
    selector: 'badges',
    templateUrl: 'badges.component.html',
    styleUrls: ['badges.component.css']
})

export class BadgesComponent implements OnInit{
  private bcService: BadgeclassService;
  private badgeclasses =  [];
  private selectedBadges = [];
  public badgeInfo = {};

  constructor(bcService: BadgeclassService) {
    this.bcService = bcService;
  }

  ngOnInit() {
    let badgeExample = [{
      idCol: "9jhfwhugjse",
      "@context": "https://w3id.org/openbadges/v2",
      type: "BadgeClass",
      id: "greinhc82h",
      name: "Badge 1",
      description: "Dummy Badge",
      image: "http://foursquareguru.com/media/badges/hats-off-foursquare-badge-lg.png",
      criteria: "John Doe",
      tags: ["test"],
      issuer: "test",
    }];

    this.badgeclasses = badgeExample;
    // this.bcService.get().subscribe(badgeclasses => {
    //   this.badgeclasses = badgeclasses;
    //   console.log(this.badgeclasses);
    // });
  }
}
