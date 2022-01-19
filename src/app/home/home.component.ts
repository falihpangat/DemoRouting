import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Name:string = "falih"

  ImageUrl:string ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-movies-in-order-index-1631199371.jpeg?crop=0.565xw:1.00xh;0.435xw,0&resize=640:*" ;

  IsShowUp:boolean = false;

  Demofunc(){
   console.log("inside ")
   this.router.navigate(['/Details']);
  }

  ChangeShowUp(){
    this.IsShowUp = true;
  }

  ChangeShowclose(){
    this.IsShowUp = false;
  }


}
