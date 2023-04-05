import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {FormBuilder, FormGroup} from '@angular/forms'
import { EmployeeModel } from './employee.model';
import { EmployeetableService } from '../shared/employeetable.service';
interface EmployeeData{
  imageUrl: ImageData,
  id: number,
  firstName: string,
  lastName: string,
  email : string,
    contactNumber : string, 
    salary : string 
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayMode:any = 'card'
 
  employeeList : EmployeeData[];
  formValue !: FormGroup
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor( private api : EmployeeService, private formBuilder : FormBuilder,
    private API : EmployeetableService) { }

  ngOnInit(): void {
    this.api.getEmployee()
    .subscribe(res=>{
     this.employeeList = res;
 
    })

    this.formValue = this.formBuilder.group ({
      firstName : [''],
      lastName : [''],
      email : [''],
      contactNumber : [''],
      salary : ['']
    })
    this.getAllEmployee();
  }

  cardView(val:string){
    this.displayMode = val;
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.contactNumber = this.formValue.value.contactNumber;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.API.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }
  getAllEmployee() {
    this.API.getEmployee()
    .subscribe(res=>{
this.employeeData = res;
    })
  }
  DeleteEmployee(row:any){
    this.API.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted");
      this.getAllEmployee();
    })
  }
  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['contactNumber'].setValue(row.contactNumber);
    this.formValue.controls['salary'].setValue(row.salary);
  }
  updateEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.contactNumber = this.formValue.value.contactNumber;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.API.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    })
  }
}