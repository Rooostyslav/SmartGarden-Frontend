import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';
import { ViewResource } from 'src/models/resource/view-resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private baseApiUrl: string = this.apiUrl + '/api/resources'

  constructor(
    private http: HttpClient,
    @Inject(SMART_GARDEN_API) private apiUrl: string
  ) { }

  getMyResouces(): Observable<ViewResource[]> {
    return this.http.get<ViewResource[]>(this.baseApiUrl + '/my');
  }

  getResoucesByGarden(gardenId: number): Observable<ViewResource[]> {
    return this.http.get<ViewResource[]>(this.apiUrl + '/api/gardens/' + gardenId + '/resources');
  }
}
