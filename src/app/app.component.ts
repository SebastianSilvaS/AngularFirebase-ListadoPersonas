import { Component, OnInit } from '@angular/core';
import { LogginService } from './LoggingService.servidor';
import { Persona } from './persona.model';
import { PersonasServices } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private logingService: LogginService,
              private personasService: PersonasServices){}
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }


  personaAgregada(persona: Persona){
    this.personasService.agregarPersona(persona);
  }
}
