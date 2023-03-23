import { Component, ElementRef, /*EventEmitter, Output*/ ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LoggingService.servidor';
import { Persona } from '../../persona.model';
import { PersonasServices } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombreInput:string = '';
  apellidoInput:string = '';
  index: number;
  modoEdicion: number;

  constructor(private loggingService:LogginService,
    private personasService: PersonasServices,
    private router: Router,
    private route: ActivatedRoute
    ){
    
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion!= null && this.modoEdicion == 1){
      let persona:Persona = this.personasService.encontrarPersona(this.index);
      if(persona != null){
        //Cargamos los valores en el formulario solo si hay un index (un registro a editar)
        this.nombreInput = persona.nombre;
        this.apellidoInput = persona.apellido;
      }
    }
  }

  limpiarcampos(){
    (<HTMLInputElement>document.getElementById("nombre")).value ='';
    (<HTMLInputElement>document.getElementById("apellido")).value ='';
  }


  onGuardarPersona(){
    if(this.nombreInput != null && this.apellidoInput != null){
      let persona1:Persona = new Persona(this.nombreInput, this.apellidoInput);
      if(this.modoEdicion!= null && this.modoEdicion == 1){
        this.personasService.modificarPersona(this.index, persona1);
        this.limpiarcampos();
      }
      else{
        this.personasService.agregarPersona(persona1);
      }
      this.router.navigate(['personas']);  
    }
    else{//si no tiene datos no hace nada se queda en el mismo lugar
      return;
    }

  }

  onEliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index)
    }
    this.router.navigate(['personas']);
  }
}

