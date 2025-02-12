import { Component } from '@angular/core';
import { SteamService } from '../../services/steam.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- Importe o FormsModule
import { BodyComponent } from '../body/body.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  standalone: true,
  imports: [CommonModule, BodyComponent, FormsModule, NgOptimizedImage], // <--- Adicione FormsModule
})
export class ApiComponent {
  perfil: any; // Armazena os dados do perfil
  steamId: string = ''; // Steam ID digitado pelo usuário

  constructor(private steamService: SteamService) {}

  // Método para buscar o perfil
  buscarPerfil(): void {
    if (!this.steamId) {
      console.error('Steam ID não pode ser vazio.');
      return;
    }

    this.steamService.getPlayerSummary(this.steamId).subscribe({
      next: (resposta) => {
        if (resposta.response.players.length > 0) {
          this.perfil = resposta.response.players[0];
          console.log('Perfil encontrado:', this.perfil);
        } else {
          console.error('Nenhum perfil encontrado para o Steam ID:', this.steamId);
          this.perfil = null; // Limpa o perfil se não for encontrado
        }
      },
      error: (erro) => {
        console.error('Erro ao buscar perfil:', erro);
        this.perfil = null; // Limpa o perfil em caso de erro
      },
    });
  }
}