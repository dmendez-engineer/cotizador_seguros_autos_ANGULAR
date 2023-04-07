import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {MARCAS,PLANES} from "../constants/helper";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {diferenciaYear,calculoMarca,calculoPlan,formatearDinero} from "../helpers/calculos";
import {Datos} from "../interfaces/datos.interface"
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  resultado:number=2000;
  resultadoFinal!:string;
  marcas=[
    {
      id:"1",nombre:"Europeo"
    },
    {
      id:"2",nombre:"Americano"
    },
    {
      id:"3",nombre:"Asiatico"
    }
  ];
   planes=[
    {id:"1",nombre:"Basico"},
    {id:"2",nombre:"Completo"}
  ]

year= new Date().getFullYear();
years=Array.from(new Array(20),(valor,index)=> this.year-index);

  formulario:FormGroup=this._fb.group({
    marca:['',[Validators.required]],
    year:['',[Validators.required]],
    plan:['',[Validators.required]]
  });

  @Output() mandarValor= new EventEmitter();

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }

  public calcularCotizacion(){


    let calculoPorYear=diferenciaYear(this.formulario.controls['year'].value);
    this.resultado=this.resultado-((calculoPorYear*3)*this.resultado/100);
    console.log("Objeto de valores:",this.formulario.controls['marca']);
    this.resultado*=calculoMarca(this.formulario.controls['marca'].value);
    this.resultado*=calculoPlan(this.formulario.controls['plan'].value);

    this.resultadoFinal=formatearDinero(this.resultado);

    var marca=this.marcas.filter(m=>m.id===this.formulario.controls['marca'].value);
    var plan=this.planes.filter(p=>p.id===this.formulario.controls['plan'].value);



    const datos:Datos={
      marca:marca[0].nombre,
      plan:plan[0].nombre,
      year:this.formulario.controls['year'].value,
      resultado:this.resultadoFinal
    }




    this.mandarValor.emit(datos);


  }
}
