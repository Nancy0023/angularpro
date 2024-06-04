import { Component } from '@angular/core';
import {DatePipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,PercentPipe,TitleCasePipe,JsonPipe,SlicePipe} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,PercentPipe,TitleCasePipe,JsonPipe,SlicePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  birthday = new Date()  ;
  name:string= "nancy gupta";
  address:string="AYODHYA";
  rupees:number=1000;
  marks:number=200;
  a:string="health is wealth";
  c:Object={
    name:"beauty",
    address:"ayodhya",
    pincode:"224001"

  }
  fruits:string[] =['Apple','orange','banana'];
  
}
