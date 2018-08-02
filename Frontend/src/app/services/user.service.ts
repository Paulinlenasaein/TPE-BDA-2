import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  users(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/users', { observe: 'response' });
  }

  auth1(username: string): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/users/'+username, { observe: 'response' });
  }

  auth2(email: string): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/users/'+email, { observe: 'response' });
  }

}
