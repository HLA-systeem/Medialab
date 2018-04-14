import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Issuer } from '../interfaces/Issuer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IssuerService {
  private issuersCol: AngularFirestoreCollection<Issuer>;
  private issuers: Observable<Issuer[]>;
  private target: AngularFirestoreDocument<Issuer>;

  constructor(private afs: AngularFirestore){
    this.issuersCol = this.afs.collection('issuers');
    this.issuers = this.issuersCol.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Issuer;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    console.log(this.issuers);
   }

  public get(){
    return this.issuers;
  }

  public post(issuers: Issuer){
    this.issuersCol.add(issuers);
  }

  public patch(issuers: Issuer){
    this.target = this.afs.doc(`issuers/${issuers.idCol}`);
    this.target.update(issuers);
  }

  public delete(issuers: Issuer){
    this.target = this.afs.doc(`issuers/${issuers.idCol}`);
    this.target.delete();
  }

}