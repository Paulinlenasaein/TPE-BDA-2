import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PromotionService {

  constructor(private http: HttpClient) { }

  promos(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/promotions', { observe: 'response' });
  }

  promo(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/promotions/'+id, { observe: 'response' });
  }

  promoState(state: number): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/promotions/state/'+state, { observe: 'response' });
  }

}
