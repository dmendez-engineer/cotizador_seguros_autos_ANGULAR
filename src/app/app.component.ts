import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cotizador_seguros_auto';

  resultPadre:{}={};
  submit!:boolean;


  public funCambiar(datos:string){
    console.log("DESDE APP PADRE DATOS DEL FORM: ",datos);

    this.submit=false;
    setTimeout(() => {
      this.submit=true;
      this.resultPadre=datos;
    }, 2500);

  }

}

