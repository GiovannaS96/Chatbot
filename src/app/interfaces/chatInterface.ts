export interface Chat{
    idChat: number,
      ultimoMessaggio: string | null,
      flagLettura: number,
      dataInvio: number,
      nomeUtente: string,
      extIdUtenteDestinatario: number,
      extIdUtenteMittente: number
}