import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';
import { Plant } from 'src/models/plant/plant';
import { ViewPlant } from 'src/models/plant/view-plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseApiUrl = this.apiUrl + '/api/plants'

  constructor(
    private http: HttpClient,
    @Inject(SMART_GARDEN_API) private apiUrl: string) { }

  getPlantsByGarden(gardenId: number): Observable<ViewPlant[]> {
    return this.http.get<ViewPlant[]>(this.apiUrl + '/api/gardens/' + gardenId + '/plants');
  }

  getPlantById(plantId: number): Observable<ViewPlant> {
    return this.http.get<ViewPlant>(this.baseApiUrl + '/' + plantId);
  }

  getPlantCondition(plantId: number): Observable<number> {
    return this.http.get<number>(this.baseApiUrl + '/' + plantId + '/condition');
  }

  getMyPlants(): Observable<ViewPlant> {
    return this.http.get<ViewPlant>(this.baseApiUrl + '/my');
  }

  createPlant(plant: Plant) {
    return this.http.post(this.baseApiUrl, plant);
  }

  deletePlant(plantId: number) {
    return this.http.delete(this.baseApiUrl + '/' + plantId);
  }
}
