import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-workshop-add-component',
  templateUrl: './workshop-add-component.component.html',
  styleUrls: ['./workshop-add-component.component.css']
})
export class WorkshopAddComponentComponent implements OnInit {

  addWorkshop: FormGroup;
  post: any;
  description: string = "";
  name:string = "";

  constructor(private fb: FormBuilder) {
    this.addWorkshop = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });
  }

  addPost(post){
    this.description = post.description;
    this.name = post.name;
  }

  ngOnInit() {
  }



}
