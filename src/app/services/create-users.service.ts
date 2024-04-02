import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUsersService {
  readonly inputUsersApi: string = "http://localhost:3000";
  constructor(public httpClient: HttpClient) {}

  public userPost(userObj: any): Observable<any> {
    return this.httpClient.post<any>(this.inputUsersApi, userObj);
  }
}
