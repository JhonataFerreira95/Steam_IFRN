import { Component, OnInit } from '@angular/core';
import { SteamService } from '../api/steam.service';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { error } from 'node:console';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  standalone: true,
  imports: [CommonModule, BodyComponent] 
})
export class ApiComponent implements OnInit {
  perfil: any;
  steamId: string = '76561198879116922';

  constructor(private steamService: SteamService) {}

  ngOnInit(): void {
    this.buscarPerfil();
  }

  buscarPerfil(): void {
    this.steamService.getPlayerSummary(this.steamId).subscribe({
      next: (resposta) => {
        this.perfil = resposta.response.players[0];
        console.log(this.perfil);
      },   error:(erro) => {
        console.error('Erro ao buscar perfil', erro);
      },
      complete: () =>{
        console.log("100")
      },
    }
    
     
    );
  }
}
