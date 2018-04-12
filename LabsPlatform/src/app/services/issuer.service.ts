import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Badgeclass } from '../interfaces/Badgeclass';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IssuerService {
  private badgeclassesCol: AngularFirestoreCollection<Badgeclass>;
  private badgeclasses: Observable<Badgeclass[]>;
  private target: AngularFirestoreDocument<Badgeclass>;

  constructor(private afs: AngularFirestore){
    this.badgeclassesCol = this.afs.collection('badgeclasses');
    this.badgeclasses = this.badgeclassesCol.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Badgeclass;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    console.log(this.badgeclasses);
   }

  public get(){
    return this.badgeclasses;
  }

  public post(badgeclass: Badgeclass){
    this.badgeclassesCol.add(badgeclass);
  }

  public patch(badgeclass: Badgeclass){
    this.target = this.afs.doc(`badgeclasses/${badgeclass.id}`);
    this.target.update(badgeclass);
  }

  public delete(badgeclass: Badgeclass){
    this.target = this.afs.doc(`badgeclasses/${badgeclass.id}`);
    this.target.delete();
  }

}