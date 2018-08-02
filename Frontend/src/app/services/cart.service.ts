import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(private http : HttpClient) { }

  cart(indexPan: string): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/paniers/'+indexPan, { observe: 'response' });
  }

  carts(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/paniers', { observe: 'response' });
  }

  panprods(indexPan: string): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/panprod/paniers/'+indexPan, { observe: 'response' });
  }

  cartsClient(username: string): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/paniers/client/'+username, { observe: 'response' });
  }

}
