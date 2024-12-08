import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

  


@Component({
  selector: 'app-fin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './float.component.html',
  styleUrls: ['./float.component.scss']
})

export class FloatComponent {
  floatValue: number = 0; // Inicializado com 0 para evitar 'null'
  quality: string = 'sdfds'; // Qualidade da arma

  constructor(private cdRef: ChangeDetectorRef) {}

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
    // forçar detecção de mudança
    this.cdRef.detectChanges();
    // Abrindo o modal
    const modalElement = document.getElementById('qualityModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    console.log(this.quality);
  }
}