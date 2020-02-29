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
export class PlaceorderService {
url:string='http://localhost:3000/placeorder';
  constructor(private client:HttpClient) { }

  public AddOrder(placeorder:Placeorder):Observable<any>{
    return this.client.post<any>(this.url,JSON.stringify(placeorder),Requestheaders);
  }
  public GetOrders():Observable<any>{
    return this.client.get<any>(this.url,Requestheaders);
  }

}
