import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message:any;

  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    let resp=this.service.login(this.username,this.password);
    resp.subscribe(data=>{
      this.router.navigate(["/dashboard"])
    })
  }
}
