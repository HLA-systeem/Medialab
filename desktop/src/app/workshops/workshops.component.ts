import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
    selector: 'workshops',
    templateUrl: 'workshops.component.html',
    styleUrls: ['workshops.component.css']
})

export class WorkshopsComponent implements OnInit{
  @Output() parentFunction = new EventEmitter();
  @Input() shopWorkshops;
  private selectedWorkshop = [];
  public workshopInfo;
  public workshops;

  ngOnInit(){

  }

  closeWorkshopPage(){
    this.selectedWorkshop = [];
    this.parentFunction.emit(false);
  }

  public addWorkshopInList(workshopInfo){
    if(workshopInfo){
      if(this.selectedWorkshop.length > 0){
        let check = this.checkDuplicateWorkshop(this.selectedWorkshop, workshopInfo);
        console.log("Check is", check);
        if (!check) {
          this.selectedWorkshop.push(workshopInfo)
        }
      }
      else{
        this.selectedWorkshop.push(workshopInfo)
      }
    }
  }

  public checkDuplicateWorkshop(array, workshop){
    return this.selectedWorkshop.some(function(workshopVal){
      return workshop === workshopVal;
    });
  }

  public removeWorkshopFromList(_i, id){
    if(id) {
      for (let i = 0; i < this.selectedWorkshop.length; i++) {
        if (this.selectedWorkshop[i].id === id) {
          this.selectedWorkshop.splice(_i, 1);
          break;
        }
      }
    }
  }
}
