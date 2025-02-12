import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './float.component.html',
  styleUrls: ['./float.component.scss']
})
export class FloatComponent {
  floatValue: number = 0; // Inicializado com 0 para evitar 'null'
  quality: string = '';   // Qualidade da arma
  qualityClass: string = ''; // Classe de cor para a qualidade

  constructor(private cdRef: ChangeDetectorRef) {}

  checkQuality(): void {
    if (this.floatValue >= 0 && this.floatValue <= 1) {
      if (this.floatValue <= 0.07) {
        this.quality = 'Nova de Fábrica (Factory New)';
        this.qualityClass = 'text-success'; // Verde
      } else if (this.floatValue <= 0.15) {
        this.quality = 'Pouco Usada (Minimal Wear)';
        this.qualityClass = 'text-warning'; // Amarelo
      } else if (this.floatValue <= 0.38) {
        this.quality = 'Testada em Campo (Field-Tested)';
        this.qualityClass = 'text-warning'; // Amarelo
      } else if (this.floatValue <= 0.45) {
        this.quality = 'Bem desgastada (Well-Worn)';
        this.qualityClass = 'text-danger'; // Vermelho
      } else {
        this.quality = 'Veterana de Guerra (Battle-Scarred)';
        this.qualityClass = 'text-danger'; // Vermelho
      }
    } else {
      this.quality = 'Valor inválido! O float deve estar entre 0 e 1.';
      this.qualityClass = 'text-danger'; // Vermelho para erro
    }

    // Forçar detecção de mudança
    this.cdRef.detectChanges();

    // Abrindo o modal
    const modalElement = document.getElementById('qualityModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    console.log(this.quality);
  }
}
