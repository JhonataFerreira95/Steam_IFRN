import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactList: any[] = [];

  constructor() {}

  // Método para adicionar um contato
  addContact(contact: { name: string; email: string; phone: string }) {
    this.contactList.push({ ...contact });
    console.log('Contato adicionado:', contact);
  }

  // Método para obter a lista de contatos
  getContacts() {
    return this.contactList;
  }
//
  // Método para limpar todos os contatos
  clearContacts() {
    this.contactList = [];
  }
}
