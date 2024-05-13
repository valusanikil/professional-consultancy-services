import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path: "employees",component: EmployeeListComponent},
  {path: "dashboard",component: DashboardComponent},
  {path: "create-employee",component:CreateEmployeeComponent},
  {path:"" ,redirectTo:"login",pathMatch:"full"},
  {path: "update-employee/:id", component:UpdateEmployeeComponent},
  {path: "employee-details/:id",component:EmployeeDetailsComponent},
  {path: "certificates",component:CertificateListComponent},
  {path: "add-certificate",component:AddCertificateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
