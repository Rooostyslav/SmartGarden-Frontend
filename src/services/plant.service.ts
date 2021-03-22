import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseApiUrl = this.apiUrl + '/api'

  constructor(private http: HttpClient,
    @Inject(SMART_GARDEN_API) private apiUrl: string) { }

  getPlantByGarden(gardenId: number): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/gardens/' + gardenId + '/plants');
  }

  getPlantById(plantId: number): Observable<any> {
    return this.http.get(this.baseApiUrl + '/pants/' + plantId);
  }

  postPlant(plant: any) {
    return this.http.post(this.baseApiUrl + '/plants', plant);
  }

  deletePlant(plantId: number) {
    return this.http.delete(this.baseApiUrl + 'plants/' + plantId);
  }
}
