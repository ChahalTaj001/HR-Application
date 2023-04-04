import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(private http:HttpClient) { }
  medicalData(){
    return this.http.get<any>("http://localhost:3000/comments")
  }
}
