import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { Garden } from 'src/models/garden';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl = this.apiUrl + '/api/users'

  constructor(private http: HttpClient, 
    @Inject(SMART_GARDEN_API) private apiUrl: string) { }

  getAllUsers(): Observable<User> {
    return this.http.get<User>(this.baseApiUrl);
  }
}
