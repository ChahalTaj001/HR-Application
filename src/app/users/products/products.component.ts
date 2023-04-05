import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/home.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList : any;
  constructor(private api:HomeService) { }

  ngOnInit(): void {
   this.api.getProduct()
    .subscribe(res=>{

      let newArr = Object.values(res);
      this.productList = newArr[0]
      console.log('res', this.productList)
      console.log(Object.values(res))
 
    })
  }

}
