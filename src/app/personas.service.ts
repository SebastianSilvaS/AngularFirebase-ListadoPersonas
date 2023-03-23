import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LoggingService.servidor";
import { Persona } from "./persona.model";


@Injectable() 



export class PersonasServices{
    personas: Persona[] = [
      new Persona('Sebastian','Silva'), 
      new Persona('laura','Juarez')];
      
      constructor(private loggingService: LogginService){}

      agregarPersona(persona: Persona){
        this.personas.push(persona);
      }
      
      encontrarPersona(index: number){
        let persona: Persona = this.personas[index];
        return persona;
      }

      modificarPersona(index:number, persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
      }

      eliminarPersona(index:number){
        this.personas.splice(index,1);
      }
}