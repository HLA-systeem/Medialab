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
  private fr
  private url;
  private des;

  constructor(upService: UploadService, private auth:AuthService){
    this.upService = upService;
   }

  ngOnInit() {
  }

  private handleFile(e){
    if (e.target.files && e.target.files[0]) {
      this.fr = new FileReader();
      let input = e.target;
      this.file = input.files[0];
      
      this.fr.onload = (e:any) =>{
        this.url = e.target.result;
      };

      this.fr.readAsDataURL(this.file);
      //this.update();
    }
  }

  private desUpdate(e){

  }

  private logOut(){
    this.auth.logout();
  }


  private update(){
    console.log("updating");
    this.upService.uploadImage(this.file);
  }

}
