import { Component, OnInit } from '@angular/core';
import { MedicalService } from 'src/app/shared/medical.service';
interface MedicalData {
  id: number,
  policyName : string,
  salary : string,
  claimedAmount : string,
  policyMaxAmount : string,
  balanceLeft : string,
  dependents : string
}


@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent  {

  medicals:MedicalData[];
  constructor(private Api : MedicalService) {
    this.Api.medicalData().subscribe((res)=>{
      console.log("res");
      this.medicals = res;
    })
   }


  
}
