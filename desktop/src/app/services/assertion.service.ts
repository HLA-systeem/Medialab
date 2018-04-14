import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Assertion } from '../interfaces/Assertion';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AssertionService {
  private assertionsCol: AngularFirestoreCollection<Assertion>;
  private assertions: Observable<Assertion[]>;
  private target: AngularFirestoreDocument<Assertion>;

  constructor(private afs: AngularFirestore){
    this.assertionsCol = this.afs.collection('assertions', ref => ref.orderBy('title','asc'));

    this.assertions = this.assertionsCol.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Assertion;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

  public get(){
    return this.assertions;
  }

  public post(assertion: Assertion){
    this.assertionsCol.add(assertion);
  }

  public patch(assertion: Assertion){
    this.target = this.afs.doc(`assertions/${assertion.id}`);
    this.target.update(assertion);
  }

  public delete(assertion: Assertion){
    this.target = this.afs.doc(`assertions/${assertion.id}`);
    this.target.delete();
  }

}
