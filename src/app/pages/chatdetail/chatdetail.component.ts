import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChatInfo } from '../../interfaces/chatInfoInterface';
import { GlobalFunction } from '../../utilities/globalFunction';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.component.html',
  styleUrl: './chatdetail.component.scss'
})
export class ChatdetailComponent {

  chatsInfo: ChatInfo[] = [
    {
      messaggio: 'ciao',
      flagLettura: 1,
      dataInvio: 1711975200000,
      extIdUtenteDestinatario: 1,
      extIdUtenteMittente: 2,
      imageUser: null
    },
    {
      messaggio: 'ciao, come stai?',
      flagLettura: 1,
      dataInvio: 1711975200000,
      extIdUtenteDestinatario: 2,
      extIdUtenteMittente: 1,
      imageUser: null
    },
    {
      messaggio: 'Tutto bene te?',
      flagLettura: 1,
      dataInvio: 1711975200000,
      extIdUtenteDestinatario: 1,
      extIdUtenteMittente: 2,
      imageUser: null
    },
    {
      messaggio: 'Alla grande!',
      flagLettura: 1,
      dataInvio: 1711975200000,
      extIdUtenteDestinatario: 2,
      extIdUtenteMittente: 1,
      imageUser: null
    },
    {
      messaggio: 'Io ora vado, ciao!',
      flagLettura: 1,
      dataInvio: 1711975200000,
      extIdUtenteDestinatario: 2,
      extIdUtenteMittente: 1,
      imageUser: null
    },
    {
      messaggio: 'Ciaooo',
      flagLettura: 0,
      dataInvio: 1711975200000,
      extIdUtenteDestinatario: 1,
      extIdUtenteMittente: 2,
      imageUser: null
    }
  ];

imageToUpload!: File | null
URLImg!: string | null

  //Inizializzo la variabile Form Group, il ! per non instanziarla obbligatoriamente
  formChat!: FormGroup
//variabile nome utente presa dal link/route
  nome!: string
  //usiamo il costruttore perchè le classi come global function vanno istanziate per usarne i metodi, se non lo faccio non posso usarli
  constructor(protected gf: GlobalFunction, private fb: FormBuilder, private route: ActivatedRoute) { //instanziamo anche activatedRoute per accedere ai parametri dinamici delle route
    this.createFormChat()
    this.route.params.subscribe(parametriRoute => { //i parametri route sono tutti i parametri di ogni route
      console.log(parametriRoute);
      this.nome=parametriRoute['nomeUtente'];
    }
    )
  }

  //Funzione Form Group da instanziare
  createFormChat() {
    //Variabili uguali in HTML
    this.formChat = this.fb.group(
      {
        //Variabili uguali in HTML
        messaggioChat: new FormControl('', [Validators.required, Validators.maxLength(100)]), //validatori
        //Posso aggiungerne un altro come loadForm: new FormControlo(etc)
      }
    )
  }

  logForm() {
    console.log(this.formChat); //Mi restituisce tutto il log del Form Group
    console.log(this.formChat.get('messaggioChat')); //Mi restituissce il log del Form Control
    console.log(this.formChat.get('messaggioChat')?.value); //Mi restituisce il singolo valore del Form Control e ? in caso di null

    //Restituisce un boolean per capire se la validazione è andata a buon fine
    console.log(this.formChat.valid);
    console.log(this.formChat.get('messaggioChat')?.errors); //Restituisce l'errore


  }

  inviaMessaggio () {
    if (this.formChat.valid) {
      let testo = this.formChat.get('messaggioChat')?.value;
      let immagine= this.URLImg

      const nuovoMessaggio: ChatInfo = {
        messaggio: testo,
        flagLettura: 0,
        dataInvio: Date.now(),
        extIdUtenteDestinatario: 1,
        extIdUtenteMittente: 2,
        imageUser: immagine
      };
      this.chatsInfo.push(nuovoMessaggio);

      console.log(this.chatsInfo);

      this.formChat.reset();
      this.URLImg=null;
    } else {
      //sta richiamando la funzione globale
      this.gf.validateFormGroup(this.formChat);
      // this.gf.controlError(this.formChat, 'messaggioChat');
    }
  }

  onEnter(event: any) {
    this.inviaMessaggio();
    if (!event.shiftKey) { 
    }
  }

onImageSelected(event: any) {
  const imageSelected = (event.target as HTMLInputElement).files?.[0];
  if (imageSelected) {
    this.imageToUpload = imageSelected;                    
    this.URLImg = this.gf.convertImgUrl(this.imageToUpload); 
  }
}

}
