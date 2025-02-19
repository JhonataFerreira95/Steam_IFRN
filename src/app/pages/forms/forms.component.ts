import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importando o FormsModule
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
    phone: '',
    msg: '',
  };

  // Array para armazenar os contatos
  contactList: any[] = [];

  constructor(private router: Router) {}

  // Método para processar o envio do formulário
  onSubmit() {
    // Remove backdrops antigos para evitar sobreposição
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());

    // Obtém o modal e exibe
    const modalElement = document.getElementById('contactModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }

    // Adiciona o contato atual ao array
    this.contactList.push({ ...this.contact });

    // Imprime o array atualizado no console
    console.log(this.contactList);

    // Limpa os campos do formulário
    this.contact = {
      name: '',
      email: '',
      phone: '',
      msg: '',
    };
  }

  // Método para fechar o modal
  closeModal(): void {
    const modalElement = document.getElementById('contactModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.hide();
    }
  }
}
