import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMART_GARDEN_API } from 'src/app/app-injections-tokens';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  private baseApiUrl: string = this.apiUrl + '/api/backups'

  constructor(
    private http: HttpClient,
    @Inject(SMART_GARDEN_API) private apiUrl: string
  ) { }

  getBackup(): Observable<any> {
    return this.http.get(this.baseApiUrl);
  }

  getBackupPath(): string {
    return this.baseApiUrl;
  }

}
