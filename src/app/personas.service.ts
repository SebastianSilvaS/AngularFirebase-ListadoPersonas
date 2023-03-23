import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Persona } from './persona.model';

@Injectable()
export class PersonasServices {
  personas: Persona[] = [];

  constructor(
    private dataServices: DataServices
  ) {}

  //Lo usamos para iniciar el arreglo, ya que ya es asincrono desde la BD
  //Se inicializa desde el componente PersonasComponent
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersona(this.personas);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, persona:Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);

}

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    //Se vuelve a guardar el arreglo para regenerar los indices en la bd
    this.modificarPersonas();
  }
  modificarPersonas(){
    if(this.personas !=null){
      this.dataServices.guardarPersona(this.personas);
    }
  }
}
