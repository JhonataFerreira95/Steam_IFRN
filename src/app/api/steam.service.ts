import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { steamConfig } from './steam.config';

@Injectable({
  providedIn: 'root'
})
export class SteamService {
  private apiKey = steamConfig.apiKey;
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
