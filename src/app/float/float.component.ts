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
  inputValue: number = 0; 
    onSubmit() {
    console.log('Valor submetido:', this.inputValue);
  }
}  