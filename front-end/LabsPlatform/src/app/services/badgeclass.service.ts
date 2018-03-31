import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BadgeclassService { //mongod --dbpath C:\data\mongodb 
  private badgeclasses: any[];
  private http: HttpClient;
  private postData: JSON;
  private watchers: Observer[] = []; 
  private target: string;

  constructor(http: HttpClient){
    this.http = http;
    this.requestBadgeclasses();
   }

  private requestBadgeclasses(){  
    this.http.get('http://localhost:8080/badgeclasses', {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
      }).subscribe(
      res => {
        let body:any = res.body;
        this.badgeclasses = body.items;
        this.notifyWatchers();
      },
      err => {
        console.log(err);
      }
    );
  }

  private uploadBadgeclass(){
    this.http.post('http://localhost:8080/badgeclasses', this.postData, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }).subscribe(
      res => {
        this.requestBadgeclasses();
      },
      err => {
        console.log(err);
      }
    );
  }

  private editBadgeclass(){
    this.http.patch('http://localhost:8080/badgeclasses/' + this.target, this.postData, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }).subscribe(
      res => {
        this.requestBadgeclasses();
      },
      err => {
        console.log(err);
      }
    );
  }

  private deleteBadgeclass(){
    this.http.delete('http://localhost:8080/badgeclasses/' + this.target, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }).subscribe(
      res => {
        this.requestBadgeclasses();
      },
      err => {
        console.log(err);
      }
    );
  }

  private notifyWatchers() {
    for(let i=0; i < this.watchers.length; i+=1){
      console.log("notify");
      this.watchers[i].recieveUpdate();
    }
  }

  public watch(watcher:Observer){
    this.watchers.push(watcher);
  }

  public get(){
    return this.badgeclasses;
  }

  public post(character){
    console.log(typeof(character));
    this.postData = character;
    this.uploadBadgeclass();
  }

  public patch(data, target){
    this.target = target;
    this.postData = data;
    this.editBadgeclass();
  }

  public delete(target){
    this.target = target;
    this.deleteBadgeclass();
  }
}
