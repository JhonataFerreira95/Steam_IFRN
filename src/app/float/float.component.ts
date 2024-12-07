import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

  


@Component({
  selector: 'app-fin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './float.component.html',
  styleUrl: './float.component.css'
})
export class FloatComponent {
  floatValue: number = 0; // Inicializado com 0 para evitar 'null'
  quality: string = ''; // Qualidade da arma

  checkQuality(): void {
    if (this.floatValue >= 0 && this.floatValue <= 1) {
      if (this.floatValue <= 0.07) {
        this.quality = 'Nova de Fábrica (Factory New)';
      } else if (this.floatValue <= 0.15) {
        this.quality = 'Pouco Usada (Minimal Wear)';
      } else if (this.floatValue <= 0.38) {
        this.quality = 'Testada em Campo (Field-Tested)';
      } else if (this.floatValue <= 0.45) {
        this.quality = 'Bem desgastada (Well-Worn)';
      } else {
        this.quality = 'Veterana de Guerra (Battle-Scarred)';
      }
    } else {
      this.quality = 'Valor inválido! O float deve estar entre 0 e 1.';
    }

    // Abrindo o modal
    const modalElement = document.getElementById('qualityModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}