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
    // Objeto para armazenar os dados temporariamente
    contact = {
      name: '',
      email: '',
      phone: ''
    };
  
    // Array para armazenar os contatos
    contactList: any[] = [];
  
    // Método para processar o envio do formulário
    onSubmit() {
      // Adiciona o contato atual ao array
      this.contactList.push({ ...this.contact });
  
      // Imprime o array atualizado no console
      console.log(this.contactList);
  
      // Limpa os campos do formulário
      this.contact = {
        name: '',
        email: '',
        phone: ''
      };
    }
  }
