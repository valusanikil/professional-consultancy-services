import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8080/api/v1/employees";
  constructor(private httpClient:HttpClient) { }
  username="nikil";
  password="nikil";
  
  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get("http://localhost:8080/api/v1/",{headers,responseType: 'text' as 'json'})
  }
  getEmployeesList(): Observable<Employee[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<Employee[]>(`${this.baseURL}`,{headers});
  }
  createEmployee(employee:Employee):Observable<Object>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.post(`${this.baseURL}`,employee,{headers});
  }

  getEmployeeById(id:number|undefined):Observable<Employee>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`,{headers});
  }

  updateEmployee(id:number|undefined,employee:Employee):Observable<Object>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.put(`${this.baseURL}/${id}`,employee,{headers});
  }

  deleteEmployee(id:number|undefined):Observable<Object>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.delete(`${this.baseURL}/${id}`,{headers});
  }
}
 