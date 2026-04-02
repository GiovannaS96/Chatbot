import { VariableBinding } from '@angular/compiler';
import { Component } from '@angular/core';
import { Chat } from '../../interfaces/chatInterface';
import { GlobalFunction } from '../../utilities/globalFunction';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrl: './chatlist.component.scss',
})
export class ChatlistComponent {

  //1) TS -> creare variabile di lista con elenco delle chat

  //2) HTML -> iterare tramite *ngFor la lista di chat e farle visualizzare come record della tabella

  // BP TS
  // - VARIABILI
  // - CONSTUTTORE
  // - FUNZIONI


  chats: Chat[] = [
    {
      idChat: 1,
      ultimoMessaggio: 'Ciaooo',
      flagLettura: 0,
      dataInvio: 1711975200000,
      nomeUtente: 'Lello',
      extIdUtenteDestinatario: 1,
      extIdUtenteMittente: 2
    },
    {
      idChat: 2,
      ultimoMessaggio: 'come stai?',
      flagLettura: 0,
      dataInvio: 1711975200000,
      nomeUtente: 'Pippo',
      extIdUtenteDestinatario: 8,
      extIdUtenteMittente: 9
    },
    {
      idChat: 3,
      ultimoMessaggio: 'bho',
      flagLettura: 0,
      dataInvio: 1711975200000,
      nomeUtente: 'Pasquale',
      extIdUtenteDestinatario: 3,
      extIdUtenteMittente: 4
    },
    {
      idChat: 4,
      ultimoMessaggio: ':3',
      flagLettura: 0,
      dataInvio: 1711975200000,
      nomeUtente: 'Tiziana',
      extIdUtenteDestinatario: 5,
      extIdUtenteMittente: 6
    }
  ];

  constructor(protected gf: GlobalFunction) {

  }

  deleteChatArray(indiceChatArray: number) {
    this.chats.splice(indiceChatArray, 1);

  }

}
