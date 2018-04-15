import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {
  private imagePath = '/images';

  private assertionPath ='/assertions';
  private classPath ='/classes';
  private issuerPath ='/issuers';
  private badgePath ='/badges';

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase) { }

  uploadImage(image){
    const storage = firebase.storage().ref();
    const upload = storage.child('${this.imagePath}/${image.name}').put(image);

    upload.on(firebase.storage.TaskEvent.STATE_CHANGED, (error) => {
      console.log(error);
    });
  }

}
