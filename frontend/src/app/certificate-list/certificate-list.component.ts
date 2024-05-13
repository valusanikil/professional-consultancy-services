import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Certificate } from '../certificate';
import { CertificateService } from '../certificate.service';


@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent implements OnInit {

  certificates: Certificate[] | undefined;

  constructor(private certificateService:CertificateService,private router: Router) { }

  ngOnInit(): void {
    this.getCertificates();
  }
  private getCertificates(){
    this.certificateService.getCertificatesList().subscribe(data => {
      this.certificates=data;
    });
  }

  home(){
    this.router.navigate(['dashboard']);
  }
}
