import { Component, ElementRef, /*EventEmitter, Output*/ ViewChild } from '@angular/core';
import { LogginService } from '../LoggingService.servidor';
import { Persona } from '../persona.model';
import { PersonasServices } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombreInput:string = '';
  apellidoInput:string = '';

  constructor(private loggingService:LogginService,
    private personasService: PersonasServices){
    
  }

  limpiarcampos(){
    (<HTMLInputElement>document.getElementById("nombre")).value = "";
    (<HTMLInputElement>document.getElementById("apellido")).value = "";
  }

  onAgregarPersona(){
    let persona1 = new Persona(
      this.nombreInput,
      this.apellidoInput)
      this.personasService.agregarPersona(persona1);
      this.limpiarcampos();
  }
}
