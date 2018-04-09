import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class IssuerService {
  private issuers: any[];
  private http: HttpClient;
  private postData: JSON;
  private watchers: Observer[] = []; 
  private target: string;

  constructor(http: HttpClient){
    this.http = http;
    this.requestIssuers();
   }

  private requestIssuers(){  
    this.http.get('http://localhost:8080/issuers', {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
      }).subscribe(
      res => {
        let body:any = res.body;
        this.issuers = body.items;
        this.notifyWatchers();
      },
      err => {
        console.log(err);
      }
    );
  }

  private uploadIssuer(){
    this.http.post('http://localhost:8080/issuers', this.postData, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }).subscribe(
      res => {
        this.requestIssuers();
      },
      err => {
        console.log(err);
      }
    );
  }

  private editIssuer(){
    this.http.patch('http://localhost:8080/issuers/' + this.target, this.postData, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }).subscribe(
      res => {
        this.requestIssuers();
      },
      err => {
        console.log(err);
      }
    );
  }

  private deleteIssuer(){
    this.http.delete('http://localhost:8080/issuers/' + this.target, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }).subscribe(
      res => {
        this.requestIssuers();
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
    return this.issuers;
  }

  public post(character){
    console.log(typeof(character));
    this.postData = character;
    this.uploadIssuer();
  }

  public patch(data, target){
    this.target = target;
    this.postData = data;
    this.editIssuer();
  }

  public delete(target){
    this.target = target;
    this.deleteIssuer();
  }

}
