import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from '../LoggingService.servidor';
import { Persona } from '../persona.model';
import { PersonasServices } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas: Persona[] = [];

  constructor(
              private personasService: PersonasServices,
              private router:Router
              ){}
              
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }

  
}
