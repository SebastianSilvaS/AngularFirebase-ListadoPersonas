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

  
}