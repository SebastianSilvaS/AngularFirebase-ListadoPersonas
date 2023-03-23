import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from '../LoggingService.servidor';
import { Persona } from '../persona.model';
import { PersonasServices } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas: Persona[]) => {
        //Cargamos los datos de la base de datos al arreglo de personas local 
        this.personas = personas;
        this.personasService.setPersonas(this.personas);
        console.log("obtener personas suscriber:" + this.personas);
      }
    );
    
  }

  irAgregar(){
    console.log("nos vamos a agregar");
    this.router.navigate(['./personas/agregar'],{queryParams:{modoEdicion:0}});
  }
}
