import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

    id:number|undefined;
    employee:Employee=new Employee();
    
  
    constructor(private employeeService:EmployeeService,
      private route:ActivatedRoute,
      private router:Router) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee=data;
      }, error=>console.log(error));
    }
  
    saveEmployee(){
      this.employeeService.createEmployee(this.employee).subscribe(data=>{
        console.log(data);
      },
      error=>console.log(error));
    }
  
    onSubmit(){
      this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
        this.goToEmployeeList();
      },
      error=>console.log(error));
      // console.log(this.employee);
      // this.saveEmployee();
    }
    goToEmployeeList(){
      this.router.navigate(['/dashboard']);
    }
  
  }
