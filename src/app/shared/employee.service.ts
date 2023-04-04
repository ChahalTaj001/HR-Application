import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http : HttpClient) { }
  getEmployee() {
    return this.http.get<any>("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
