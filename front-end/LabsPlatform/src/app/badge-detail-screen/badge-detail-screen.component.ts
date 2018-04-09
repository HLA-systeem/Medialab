import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BadgeclassService} from '../services/badgeclass.service';

@Component({
  selector: 'app-badge-detail-screen',
  templateUrl: './badge-detail-screen.component.html',
  styleUrls: ['./badge-detail-screen.component.css']
})
export class BadgeDetailComponent implements Observer {
  private bcService: BadgeclassService;
  private route: ActivatedRoute;
  private badgeclasses: any[];
  private badge;

  constructor(bcService: BadgeclassService, route: ActivatedRoute){
    this.bcService = bcService;
    bcService.watch(this);
    this.route;
  }

  recieveUpdate(){
    this.badgeclasses = this.bcService.get();
    this.getBadge()
  }

  private getBadge(){
    let badgeId = this.route.snapshot.params['_id'];
    this.badgeclasses.find((badge) => {
      if(badge._id == badgeId){
        this.badge = badge;
        return true;
      }
      else{
        return false;
      }
    });
  }


}
