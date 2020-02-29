import { Injectable } from '@angular/core';
import {HttpHeaders ,HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import { Placeorder } from '../Models/placeorder';
import { Feedback } from '../Models/feedback';
const Requestheaders={headers:new HttpHeaders(
  {
    'Content-Type':'application/json'
  }

)}
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url:string='http://localhost:3000/contact';
  constructor(private client:HttpClient) { }
  public AddFeedback(feedback:Feedback):Observable<any>
  {
    return this.client.post<any>(this.url,JSON.stringify(feedback),Requestheaders);
  }
  public GetFeedback(feedback:Feedback):Observable<any>
  {
    return this.client.get<any>(this.url);
  }
}
