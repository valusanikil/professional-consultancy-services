import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] | undefined;
  firstname:any;

  constructor(private employeeService:EmployeeService,private router: Router ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees=data;
    });
  }

  updateEmployee(id: number|undefined){
    console.log(id);
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number|undefined){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }

  AddCertificates(){
    this.router.navigate(['add-certificate']);

  }

  Search(){
    if(this.firstname == ""){
      this.ngOnInit();
    }
    else{
      this.employees = this.employees?.filter(res =>{
        return res.firstname?.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  }

}
