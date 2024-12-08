import { Component, OnInit } from '@angular/core';
import { SteamService } from '../api/steam.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class ApiComponent implements OnInit {
  perfil: any;
  steamId: string = '76561199156125218';

  constructor(private steamService: SteamService) {}

  ngOnInit(): void {
    this.buscarPerfil();
  }

buscarPerfil(): void {
    this.steamService.getPlayerSummary(this.steamId).subscribe(
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