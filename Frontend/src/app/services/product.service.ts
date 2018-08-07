import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {

  }

  products(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/produits', { observe: 'response' });
  }

  product(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/produits/'+id, { observe: 'response' });
  }

  prodType(type: string): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/typeprod/'+type, { observe: 'response' });
  }

  nameAsc(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/nomasc', { observe: 'response' });
  }

  nameDesc(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/nomdesc', { observe: 'response' });
  }

  priceAsc(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/prixasc', { observe: 'response' });
  }

  priceDesc(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/prixdesc', { observe: 'response' });
  }

}
