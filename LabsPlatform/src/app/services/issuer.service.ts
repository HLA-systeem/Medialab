import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Badgeclass } from '../interfaces/Badgeclass';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IssuerService {
  private issuersCol: AngularFirestoreCollection<Badgeclass>;
  private issuers: Observable<Badgeclass[]>;
  private target: AngularFirestoreDocument<Badgeclass>;

  constructor(private afs: AngularFirestore){
    this.issuersCol = this.afs.collection('issuers');
    this.issuers = this.issuersCol.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Badgeclass;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    console.log(this.issuers);
   }

  public get(){
    return this.issuers;
  }

  public post(issuers: Badgeclass){
    this.issuersCol.add(issuers);
  }

  public patch(issuers: Badgeclass){
    this.target = this.afs.doc(`issuers/${issuers.id}`);
    this.target.update(issuers);
  }

  public delete(issuers: Badgeclass){
    this.target = this.afs.doc(`issuers/${issuers.id}`);
    this.target.delete();
  }

}