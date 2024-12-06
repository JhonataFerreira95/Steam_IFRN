import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { steamConfig } from './steam.config';

@Injectable({
  providedIn: 'root'
})
export class SteamService {
  private apiKey = '1DC3944ADB20D3B66C21EB869181143C';
  private baseUrl = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';

  constructor(private http: HttpClient) {}

  getPlayerSummary(steamId: string): Observable<any> {
    const url = `${this.baseUrl}?key=${this.apiKey}&steamids=${steamId}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Erro na API Steam:', error);
        return throwError(() => new Error('Erro ao buscar os dados da Steam.'));
      })
    );
  }
}
