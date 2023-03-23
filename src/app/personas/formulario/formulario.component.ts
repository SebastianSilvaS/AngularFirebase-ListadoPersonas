import { Component, ElementRef, /*EventEmitter, Output*/ ViewChild } from '@angular/core';
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

  constructor(private loggingService:LogginService,
    private personasService: PersonasServices,
    private router: Router,
    private route: ActivatedRoute
    ){
    
  }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    if(this.index){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  limpiarcampos(){
    (<HTMLInputElement>document.getElementById("nombre")).value ='';
    (<HTMLInputElement>document.getElementById("apellido")).value ='';
  }

  onGuardarPersona(){
    let persona1 = new Persona(
      this.nombreInput,
      this.apellidoInput)
      if(this.index){
        this.personasService.modificarPersona(this.index, persona1);
      }else{
        this.personasService.agregarPersona(persona1);
      }
      
      this.limpiarcampos();
      this.router.navigate(['personas']);
  }

    eliminarPersona(){
      if(this.index !=null){
        this.personasService.eliminarPersona(this.index);
      }
      this.router.navigate(["personas"]);
    }
}
