import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon } from "sweetalert2";


@Injectable({
  providedIn: 'root',
})

export class UtilitiesProvider{

  constructor(){}

  public alert(icon: SweetAlertIcon,title: string, text: string){
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        text: text,
        // timer: 1500,
    });
  }
}
