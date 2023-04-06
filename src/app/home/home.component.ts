import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';

interface Products {
  thumbnail:ImageData,
  title: string,
  price: string,
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList : any = {
    
  }
  constructor(private api:HomeService) { }

  ngOnInit(): void {
   this.api.getProduct()
    .subscribe(res=>{

      let newArr = Object.values(res);
      this.productList = newArr[0]
     
    })
  }

}
