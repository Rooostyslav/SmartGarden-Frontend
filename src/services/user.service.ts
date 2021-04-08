import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';
import { Observable } from 'rxjs';
import { ViewUser } from 'src/models/user/view-user';
import { User } from 'src/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl = this.apiUrl + '/api/users'

  constructor(private http: HttpClient, 
    @Inject(SMART_GARDEN_API) private apiUrl: string) { }

  getAllUsers(): Observable<ViewUser[]> {
    return this.http.get<ViewUser[]>(this.baseApiUrl);
  }

  getMyUser(): Observable<ViewUser> {
    return this.http.get<ViewUser>(this.baseApiUrl + '/my');
  }

  getUserById(userId: number): Observable<ViewUser> {
    return this.http.get<ViewUser>(this.baseApiUrl + '/' + userId);
  }

  createUser(user: User) {
    return this.http.post(this.baseApiUrl, user);
  }
}
