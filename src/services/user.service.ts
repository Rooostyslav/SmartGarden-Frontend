import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl = this.apiUrl + '/api/users'

  constructor(private http: HttpClient, 
    @Inject(SMART_GARDEN_API) private apiUrl: string) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl);
  }
}
