import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';

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

  sendEmail(email: string, lastname: string): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/users/sendmail/'+email+'/'+lastname, { observe: 'response' });
  }

  sendEmailTransaction(email: string, firstname:string, lastname: string): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8080/twmsos-api/users/sendmail/'+email+'/'+firstname+'/'+lastname, { observe: 'response' });
  }

  addClient(client: User): Observable<User> {
   return this.http.post<User>('http://localhost:8080/twmsos-api/users', client);
 }

}
