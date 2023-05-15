import { Component, Input } from '@angular/core';

interface Person {
  id: string
  name: string
  email: string
}

interface Message {
  from: Person
  to: Person
  subject: string
  attach: boolean
  status: 'SENT' | 'RECEIVED' | 'READ'
  date: string
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  @Input()
  messages: Message[] = [
    {
      from: { id: '1', name: 'Freela Name', email: 'freela@email.com'},
      to: { id: '2', name: 'Cicrano', email: 'cicrano@email.com'},
      subject: 'Nova versão esta quase lá',
      attach: false,
      status: 'SENT',
      date: '28 de Janeiro de 2023'
    },
    {
      from: { id: '3', name: 'Fulano', email: 'fulano@email.com'},
      to: { id: '1', name: 'Freela Name', email: 'freela@email.com'},
      subject: 'Refazer tudo - Quero diferente',
      attach: true,
      status: 'RECEIVED',
      date: '15 de Janeiro de 2023'
    },
    {
      from: { id: '4', name: 'Fulaninho', email: 'fulaninho@email.com'},
      to: { id: '1', name: 'Freela Name', email: 'freela@email.com'},
      subject: 'Vamos ter que fazer algumas mudanças',
      attach: false,
      status: 'READ',
      date: '13 de Janeiro de 2023'
    }
  ]
}
