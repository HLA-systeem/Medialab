import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BadgeclassService} from '../services/badgeclass.service';
import { Badgeclass } from '../interfaces/badgeclass';

@Component({
  selector: 'app-badge-detail-screen',
  templateUrl: './badge-detail-screen.component.html',
  styleUrls: ['./badge-detail-screen.component.css']
})
export class BadgeDetailComponent implements OnInit{
  private route: ActivatedRoute;
  private bcService: BadgeclassService
  private badgeclasses: Badgeclass[];
  private badge;

  constructor(bcService: BadgeclassService, route: ActivatedRoute){
    this.bcService = bcService;
    this.route = route;
  }

  ngOnInit() {
    this.bcService.get().subscribe(badgeclasses => {
      this.badgeclasses = badgeclasses;
      this.getBadge();
    });
  }

  private getBadge(){
    let idCol = this.route.snapshot.params['idCol'];
    console.log(this.route.snapshot.params['idCol']);
    this.badgeclasses.find((badge) => {
      if(badge.idCol == idCol){
        this.badge = badge;
        console.log(this.badge);
        return true;
      }
      else{
        return false;
      }
    });
  }


}
