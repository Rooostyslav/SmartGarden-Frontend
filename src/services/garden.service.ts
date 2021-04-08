import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';
import { ViewGarden } from 'src/models/garden/view-garden';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

  private baseApiUrl = this.apiUrl + '/api/'

  constructor(
    private http: HttpClient,
    @Inject(SMART_GARDEN_API) private apiUrl: string) { }

  getMyGardens(): Observable<ViewGarden[]> {
    return this.http.get<ViewGarden[]>(this.baseApiUrl + 'gardens/my');
  }

  getGardenById(gardenId: number) : Observable<ViewGarden> {
    return this.http.get<ViewGarden>(this.baseApiUrl + 'gardens/' + gardenId);
  }

  getGardensByUser(userId: number) : Observable<ViewGarden[]> {
    return this.http.get<ViewGarden[]>(this.baseApiUrl + 'users/' + userId + '/gardens');
  }
}
