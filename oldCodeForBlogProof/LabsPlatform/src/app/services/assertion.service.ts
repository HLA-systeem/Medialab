import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AssertionService {
  private assertions: any[];
  private http: HttpClient;
  private postData: JSON;
  private watchers: Observer[] = []; 
  private target: string;

  constructor(http: HttpClient){
    this.http = http;
    this.requestAssertions();
   }

  private requestAssertions(){  
    this.http.get('http://localhost:8080/assertions', {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
      }).subscribe(
      res => {
        let body:any = res.body;
        this.assertions = body.items;
        this.notifyWatchers();
      },
      err => {
        console.log(err);
      }
    );
  }

  private uploadAssertion(){
    this.http.post('http://localhost:8080/assertions', this.postData, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }).subscribe(
      res => {
        this.requestAssertions();
      },
      err => {
        console.log(err);
      }
    );
  }

  private editAssertion(){
    this.http.patch('http://localhost:8080/assertions/' + this.target, this.postData, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }).subscribe(
      res => {
        this.requestAssertions();
      },
      err => {
        console.log(err);
      }
    );
  }

  private deleteAssertion(){
    this.http.delete('http://localhost:8080/assertions/' + this.target, {
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }).subscribe(
      res => {
        this.requestAssertions();
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
    return this.assertions;
  }

  public post(character){
    console.log(typeof(character));
    this.postData = character;
    this.uploadAssertion();
  }

  public patch(data, target){
    this.target = target;
    this.postData = data;
    this.editAssertion();
  }

  public delete(target){
    this.target = target;
    this.deleteAssertion();
  }

}
