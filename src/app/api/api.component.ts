import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  perfil: any;
  steamId: string = 'https://steamcommunity.com/profiles/76561199156125218'; // 
  apiKey: string = 'SUA_API_KEY_AQUI'; //
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
