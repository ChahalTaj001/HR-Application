import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>("https://dummyjson.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
