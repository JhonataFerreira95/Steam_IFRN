  import { Injectable } from '@angular/core';
  import { HttpClient, HttpParams } from '@angular/common/http';
  import { Observable, catchError, map, throwError } from 'rxjs';
  
  @Injectable({
    providedIn: 'root',
  })
  export class SteamService {
    private readonly apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';
    private readonly apiKey = '9B56A5340BB6E2396DA056F47EA7C464'; // <--- Substitua pela sua chave
  
    constructor(private http: HttpClient) {}
  
    getPlayerSummary(steamId: string): Observable<any> {
      const params = new HttpParams()
        .set('key', this.apiKey)
        .set('steamids', steamId);
  
      return this.http.get(this.apiUrl, { params }).pipe(
        map((data: any) => {
          if (!data || !data.response || !data.response.players) {
            throw new Error('Resposta da API inválida');
          }
          return data;
        }),
        catchError((error) => {
          console.error('Erro na requisição:', error);
          return throwError(() => new Error('Erro ao buscar perfil. Tente novamente mais tarde.'));
        })
      );
    }
  }