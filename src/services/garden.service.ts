import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

  private baseApiUrl = this.apiUrl + '/api'

  constructor(private http: HttpClient,
    @Inject(SMART_GARDEN_API) private apiUrl: string) { }

  getGardensByUser(userId: number): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/users/' + userId + '/gardens');
  }

}
