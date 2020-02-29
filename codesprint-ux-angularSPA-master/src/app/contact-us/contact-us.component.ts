import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Feedback } from '../Models/feedback';
import { Placeorder } from '../Models/placeorder';
import { PlaceorderService } from '../Services/placeorder.service';
import { FeedbackService } from '../Services/feedback.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submitted:boolean=false;
  feedbackForm:FormGroup;
fb:Feedback;

  constructor(private builder:FormBuilder,private service:FeedbackService) { }
  ngOnInit(): void {
    //bussiness functionality
    this.feedbackForm=this.builder.group({
      
      Name:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
      email:['',[Validators.required,Validators.email]],
      message:[''],
    });
  }
 get f()
  {
   return this.feedbackForm.controls;
  }
  onSubmit()
  {
    this.submitted=true;
//    display from values on sucess
    if(this.feedbackForm.valid)
    {
      this.Add();
      console.log(JSON.stringify(this.feedbackForm.value));
    }
  }
    Add()
    {
      this.fb=new Feedback();
       this.fb.name=this.feedbackForm.value["Name"];
       this.fb.email=this.feedbackForm.value["email"];
       this.fb.message=this.feedbackForm.value["message"];
      console.log(this.fb);
      this.service.AddFeedback(this.fb).subscribe(res=>{
        console.log("record added");
      },err=>{
        console.log(err)
      })
 }
}

