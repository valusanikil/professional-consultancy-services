import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Certificate } from '../certificate';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {

  certificate:Certificate=new Certificate();

  constructor(private certificateService:CertificateService,private router: Router) { }

  ngOnInit(): void {
  }
  saveCerificate(){
    this.certificateService.createCertificate(this.certificate).subscribe(data=>{
      console.log(data);
      this.goToCertificateList();
    },
    error=>console.log(error));
  }

  goToCertificateList(){
    this.router.navigate(['/certificates']);
  }
  onSubmit(){
    console.log(this.certificate);
    this.saveCerificate();
  }

}

