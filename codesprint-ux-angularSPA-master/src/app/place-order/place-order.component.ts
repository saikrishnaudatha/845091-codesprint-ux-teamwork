import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaceorderService } from '../Services/placeorder.service';
import { Placeorder } from '../Models/placeorder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  PlaceOrderForm:FormGroup;
  submitted:boolean=false;
  placeorder:Placeorder;
  constructor(private builder:FormBuilder,private service:PlaceorderService,private route:Router) { }

  ngOnInit() {
   this.PlaceOrderForm=this.builder.group({
     giftCardAmount1:['',Validators.required],
     giftCardAmount2:['',Validators.required],
     frstname:['',Validators.required],
     lastname:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
   state:['',Validators.required],
   country:[''],
   pincode:['',Validators.required],
    bfrstname:['',Validators.required],
    blastname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]]
   });
  }
  get f()
  {
    return this.PlaceOrderForm.controls;

  }
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.PlaceOrderForm.valid)
    {
      this.addOrder();
      console.log(JSON.stringify(this.PlaceOrderForm.value));
    }
  }
Reset()
  {
    this.submitted = false;
    this.PlaceOrderForm.reset();
  }
  addOrder():void{
   this.placeorder=new Placeorder();
   this.placeorder.id=Math.floor(Math.random()*100);
   this.placeorder.giftCardAmount1=this.PlaceOrderForm.value["giftCardAmount1"];
   this.placeorder.giftCardAmount2=this.PlaceOrderForm.value["giftCardAmount2"];
   this.placeorder.frstname=this.PlaceOrderForm.value["frstname"];
   this.placeorder.lastname=this.PlaceOrderForm.value["lastname"];
   this.placeorder.address=this.PlaceOrderForm.value["address"];
   this.placeorder.country=this.PlaceOrderForm.value["country"];
   this.placeorder.city=this.PlaceOrderForm.value["city"];
   this.placeorder.state=this.PlaceOrderForm.value["state"];
   this.placeorder.bfrstname=this.PlaceOrderForm.value["bfrstname"];
   this.placeorder.blastname=this.PlaceOrderForm.value["blastname"];
   this.placeorder.email=this.PlaceOrderForm.value["email"];
   this.placeorder.pincode=this.PlaceOrderForm.value["pincode"];
   this.placeorder.mobile=this.PlaceOrderForm.value["mobile"];
    this.service.AddOrder(this.placeorder).subscribe(res=>
      {
        console.log("record added");
        alert("order placed successfully..click ok to view orders");
        this.route.navigateByUrl('/landingpage/vieworder');
        
      })
  }
}
