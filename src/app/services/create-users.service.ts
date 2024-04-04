import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreate, UserGroup } from '../utils/user-create';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CreateUsersService {
  readonly inputUsersApi: string = environment.inputUsersApi;
  constructor(public httpClient: HttpClient) {}

  public userPost(userObj: UserGroup): Observable<UserCreate> {
    return this.httpClient.post<UserCreate>(this.inputUsersApi, userObj);
  }
}
