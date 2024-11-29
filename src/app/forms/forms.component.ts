import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importando o FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,   // Marca o componente como standalone
  imports: [FormsModule, CommonModule],  // Adiciona o FormsModule diretamente aqui
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  userName: string = '';
  email: string = '';
  submitted: boolean = false;

  submitForm() {
    this.submitted = true;
    console.log('Form Data:', {
      userName: this.userName,
      email: this.email
    });
  }
}
