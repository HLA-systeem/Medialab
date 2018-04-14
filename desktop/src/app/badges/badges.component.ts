import {Component, OnInit} from '@angular/core';
import {Badgeclass} from "../interfaces/badgeclass";
import {BadgeclassService} from "../services/badgeclass.service";

@Component({
    selector: 'badges',
    templateUrl: 'badges.component.html',
    styleUrls: ['badges.component.css']
})

export class BadgesComponent implements OnInit{
  private badgeclasses =  [];
  private bcService:BadgeclassService;
  private selectedBadges = [];
  private workshopclasses =  [];
  public badgeInfo;
  openWorkshop = false;
  shopWorkshops = [];
  constructor() {

  }

  ngOnInit() {
    let badgeExample = [
      {
      idCol: "9jhfwhugjse",
      "@context": "https://w3id.org/openbadges/v2",
      type: "BadgeClass",
      id: "greinhc82h",
      name: "Badge 1",
      description: "Dummy Badge",
      image: "http://foursquareguru.com/media/badges/hats-off-foursquare-badge-lg.png",
      criteria: "John Doe",
      duration: "540 minuten",
      location: "Wijnhaven 101, Rotterdam",
      tags: ["test"],
      issuer: "test",
     },
      {
      idCol: "9jhfwhugjse",
      "@context": "https://w3id.org/openbadges/v2",
      type: "BadgeClass",
      id: "hwoghdjth6",
      name: "Badge 2",
      description: "Dummy Badge",
      image: "https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png",
      criteria: "John Doe",
      duration: "480 minuten",
      location: "Scheepsbouwweg 15, Rotterdam",
      tags: ["test"],
      issuer: "test",
     }
     ];

    let workshopExample = [
      {
        id: "1",
        title: "Workshop 1",
        date: "16-05-2018",
        location: "Wijnhaven 101, Rotterdam",
        user: "John Doe",
        time: "14:00 u - 16:30 u",
        img: "../../assets/workshop.png",
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
        badge:{
          idCol: "9jhfwhugjse",
          "@context": "https://w3id.org/openbadges/v2",
          type: "BadgeClass",
          id: "greinhc82h",
          name: "Badge 1",
          description: "Dummy Badge",
          image: "http://foursquareguru.com/media/badges/hats-off-foursquare-badge-lg.png",
          criteria: "John Doe",
          duration: "540 minuten",
          location: "Wijnhaven 101, Rotterdam",
          tags: ["test"],
          issuer: "test",
        }
      },
      {
        id: "2",
        title: "Workshop 2",
        date: "16-05-2018",
        location: "Wijnhaven 101, Rotterdam",
        user: "John Doe",
        time: "14:00 u - 16:30 u",
        img: "../../assets/workshop.png",
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
        badge:{
          idCol: "9jhfwhugjse",
          "@context": "https://w3id.org/openbadges/v2",
          type: "BadgeClass",
          id: "hwoghdjth6",
          name: "Badge 2",
          description: "Dummy Badge",
          image: "https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png",
          criteria: "John Doe",
          duration: "480 minuten",
          location: "Scheepsbouwweg 15, Rotterdam",
          tags: ["test"],
          issuer: "test",
        }
      }
    ];


    this.workshopclasses = workshopExample;

    this.badgeclasses = badgeExample;
    //  this.bcService.get().subscribe(badgeclasses => {
    //    this.badgeclasses = badgeclasses;
    //    console.log(this.badgeclasses);
    //  });
  }

  public addBadgeInList(badgeInfo){
    if(badgeInfo){
      if(this.selectedBadges.length > 0){
        let check = this.checkDuplicateBadge(this.selectedBadges, badgeInfo);
        console.log("Check is", check);
        if (!check) {
          this.selectedBadges.push(badgeInfo);
          this.selectWorkshops();
        }
      }
      else{
        this.selectedBadges.push(badgeInfo);
        this.selectWorkshops();
      }
    }
  }

  public selectWorkshops(){
    for(let i = 0; i < this.selectedBadges.length; i++){
      for(let j = 0; j < this.workshopclasses.length; j++){
        console.log(this.workshopclasses[j] );
        console.log(this.selectedBadges[i]);
        if(this.workshopclasses[j].badge.id === this.selectedBadges[i].id){
          let check = this.checkDuplicateWorkshop(this.shopWorkshops, this.workshopclasses[j]);
          console.log('MATCH');
          if(!check){
            this.shopWorkshops.push(this.workshopclasses[j])
          }
        }
      }
    }
  }

  public checkDuplicateBadge(array, badge){
    return this.selectedBadges.some(function(badgeVal){
      return badge === badgeVal;
    });
  }

  public checkDuplicateWorkshop(array, workshop){
    return this.shopWorkshops.some(function(workshopVal){
      return workshop === workshopVal;
    });
  }

  public removeBadgeFromList(_i, id){
    if(id) {
      for (let i = 0; i < this.selectedBadges.length; i++) {
        if (this.selectedBadges[i].id === id) {
          this.selectedBadges.splice(_i, 1);
          this.selectWorkshops();
          break;
        }
      }
    }
  }

  public checkSelectedBadges(){
    if(this.selectedBadges.length > 0){
      this.openWorkshop = !this.openWorkshop;
    }
  }

  public closeWorkshopPage(event){
    this.openWorkshop = event;
  }

}
