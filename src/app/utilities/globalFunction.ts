import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { ChatdetailComponent } from "../pages/chatdetail/chatdetail.component";

@Injectable({ providedIn: 'root' })
export class GlobalFunction {
    //funzione globale per convertire il time Stamp
    covertDate(dataInvio: number) {
        let dataInvioFormatted: Date = new Date(dataInvio);
        let dataConvertita = dataInvioFormatted.toLocaleString([], { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
        return dataConvertita;
    }

    //Funzione che gestisce solo gli errori per qualsiasi tipo
    controlError(form: FormGroup, formControl: string) { //prende come parametri i Form e gli errori
        let errorMessage = "";
        let errors = form.get(formControl)?.errors; //sto prendendo gli errori

        if (errors) {
            if (errors['required']) {
                errorMessage = "Inserisci almeno un carattere";
            } else if (errors['minlength']) {
                errorMessage = "Non hai inserito abbastanza caratteri";
            } else if (errors['maxlength']) {
                errorMessage = "Hai inserito troppi caratteri";
            } else if (errors['email']) {
                errorMessage = "Inserisci una email valida";
            } else if (errors['pattern']) {
                errorMessage = "Il formato deve essere come quello indicato";
            } else if (errors['max']) {
                let valoreMax = errors['max'].max;
                errorMessage = 'Il valore non deve superare ' + valoreMax;
            } else if (errors['min']) {
                let valoreMin = errors['min'].min;
                errorMessage = 'Il valore non deve essere inferiore a ' + valoreMin;
            }

        }

        return errorMessage; //ritorna l'errore

    }

    //Funzione che genera un solo pop-up che contiene tutti gli errori di tutti i form presenti nel componente tipo MessaggioForm
    validateFormGroup(form: FormGroup) { //prende sempre come parametro Form Group

        let errorMessage = ""; //inizializziamo stringa errore

        let arrayFormControl = Object.entries(form.value); //il metodo Object Entries trasforma un oggetto in un array chiave-valore

        arrayFormControl.forEach((formControl: any) => {
            let key = formControl[0]; //con il foreach poi ci prendiamo il primo valore che è il nome del form
            let singleError = this.controlError(form, key) //inizializziamo una variabile per ogni singolo errore dei form

            if (singleError != "") { //se la variabile errore è diversa da null/vuoto allora
                errorMessage += `<br> ${key} >> ${singleError}`; //popoliamo con += la variabile errore che concatenerà il nome del form+ il tipo di errore
                //il br in HTML perchè usando SweetAlert lui vuole un html nel messaggio pop-up
            }
        })

        //il pop-up di Sweet Alert
        Swal.fire({
            icon: "error",
            title: "ERRORE",
            html: errorMessage,
        });



    }
convertImgUrl(img: File): string | null{
    if (!img) return null;
    return URL.createObjectURL(img);
    }
}