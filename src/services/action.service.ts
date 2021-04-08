import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';
import { ViewAction } from 'src/models/action/view-action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private baseApiUrl: string = this.apiUrl + '/api/'

  constructor(
    private http: HttpClient,
    @Inject(SMART_GARDEN_API) private apiUrl: string
  ) { }

  getMyActions(): Observable<ViewAction[]> {
    return this.http.get<ViewAction[]>(this.baseApiUrl + 'actions/my');
  }

  getMyUnfulfiledActions(): Observable<ViewAction[]> {
    return this.http.get<ViewAction[]>(this.baseApiUrl + 'actions/my/unfulfiled');
  }

  getActionsByPlant(plantId: number): Observable<ViewAction[]> {
    return this.http.get<ViewAction[]>(this.baseApiUrl + 'plants/' + plantId + '/actions');
  }
}
