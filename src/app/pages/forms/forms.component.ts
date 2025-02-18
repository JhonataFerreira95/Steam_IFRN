import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importando o FormsModule
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service'; // Importando o serviço


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

  constructor(private router: Router, private contactService: ContactService) {}

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

    // Adiciona o contato ao serviço
    this.contactService.addContact(this.contact);

    // Imprime a lista de contatos no console
    console.log(this.contactService.getContacts());

    // Limpa os campos do formulário
    this.contact = {
      name: '',
      email: '',
      phone: ''
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
