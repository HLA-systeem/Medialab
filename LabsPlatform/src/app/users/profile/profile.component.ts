import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private upService: UploadService;
  private file;
  private des;

  constructor(upService: UploadService){
    this.upService = upService;
   }

  ngOnInit() {
  }

  private handleFile(e){
    let input = e.target;
    this.file = input.files[0];
    this.update();
  }

  private desUpdate(e){

  }

  private update(){
    this.upService.uploadImage(this.file);
  }

}
