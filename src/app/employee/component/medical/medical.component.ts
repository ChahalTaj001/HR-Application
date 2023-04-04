import { Component, OnInit } from '@angular/core';
import { MedicalService } from 'src/app/shared/medical.service';



@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent  {

  medicals:any;
  constructor(private Api : MedicalService) {
    this.Api.medicalData().subscribe((res)=>{
      console.log("res");
      this.medicals = res;
    })
   }


  
}
