import { Component, OnInit,Input } from '@angular/core';
import {Datos} from "../interfaces/datos.interface"
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input("datos") datos:Datos={};
  //@Input("datos") datos!:Datos;
  datosMostrar!:Datos;

  constructor() { }

  ngOnInit(): void {

    console.log("Datos desde RESULTADO: ",this.datos);

  }

}
