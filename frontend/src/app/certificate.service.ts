import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from './certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private baseURL="http://localhost:8080/certificates";
  constructor(private httpClient:HttpClient) { }
  username="Hemanth";
  password="hemanth";

  getCertificatesList(): Observable<Certificate[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<Certificate[]>(`${this.baseURL}`,{headers});
  }
  createCertificate(certificate:Certificate):Observable<Object>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.post(`${this.baseURL}`,certificate,{headers});
  }
}
