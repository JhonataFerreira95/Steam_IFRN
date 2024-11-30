import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { steamConfig } from './steam.config';

export class SteamService {
  private apiKey = steamConfig.apiKey;

  constructor(private http: HttpClient) {}

  getSteamData() {
    const url = https://api.steampowered.com/ISteamUserStats/GetPlayerSummaries/v2/?key=${this.apiKey}&steamids=76561197960435530;
    return this.http.get(url);
  }
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  perfil: any;
  steamId: string = '76561199156125218'; 
  apiKey: string = '36753105E0F21430EECA48A8C21C007B';
  baseUrl: string = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarPerfil();
  }

  buscarPerfil(): void {
    const url = `${this.baseUrl}?key=${this.apiKey}&steamids=${this.steamId}`;
    this.http.get<any>(url).subscribe(
      (resposta) => {
        this.perfil = resposta.response.players[0];
        console.log(this.perfil);
      },
      (erro) => {
        console.error('Erro ao buscar perfil', erro);
      }
    );
  }
}
