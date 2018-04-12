import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['homepage.component.css']
})

export class HomepageComponent {
  exampleCode = 'GH0123';
  formCheckCode:FormGroup;
  error = false;

  constructor(private fb: FormBuilder){
    this.formCheckCode = fb.group({
      'checkinCode': [null, Validators.required],
    });
  }

  addPost(post):void {
    if(post.checkinCode !== this.exampleCode){
      this.error = true;
    }
    else{
      this.error = false;
    }
  }

}
