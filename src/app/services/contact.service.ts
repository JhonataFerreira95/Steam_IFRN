import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactList: any[] = [];

  constructor() {}

 // Método para adicionar um contato 
addContact(contact: { name: string; email: string; phone: string }) {
  this.contactList = [{ ...contact }]; // Substitui a lista em vez de adicionar
  console.log('Contato atualizado:', this.contactList);
}


  // Método para obter a lista de contatos
  getContacts() {
    return this.contactList;
  }
//
clearContacts() {
  this.contactList = [];
  console.log('Lista de contatos foi limpa:', this.contactList);
}
}
