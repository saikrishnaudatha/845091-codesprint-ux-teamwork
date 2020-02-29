import { Component, OnInit } from '@angular/core';
import { PlaceorderService } from '../Services/placeorder.service';
import { Placeorder } from '../Models/placeorder';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  vieworder:Placeorder[];
id:number;

  constructor(private service:PlaceorderService) { }

  ngOnInit() {
    this.service.GetOrders().subscribe(res=>{
      this.vieworder=res;   
      console.log(this.vieworder);
    })
  }

}
