import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()

export class DataServices{
    constructor(private httpClient: HttpClient,
                private loginService: LoginService){}
    url = 'https://listadopersonas-b4dbf-default-rtdb.firebaseio.com/datos.json';

      //Cargar Personas
      cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>('https://listadopersonas-b4dbf-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    //Guardar Personas
    guardarPersona(personas: Persona[]){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listadopersonas-b4dbf-default-rtdb.firebaseio.com/datos.json?auth='+token;
        this.httpClient.put(url, personas)
        .subscribe(
            response =>console.log("Resultado guardar Persona" + response),
            error => console.log("Error al guardar personas: " + error)
        );
    }

    //Modificar Personas
    modificarPersona(index:number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listadopersonas-b4dbf-default-rtdb.firebaseio.com/' + '/datos/' + index + '.json?auth='+token;
        this.httpClient.put(url, persona)
            .subscribe(
                (response) => {
                    console.log("resultado modificar Persona: " + response);
                },
                (error) => console.log("Error en modificar Persona: " + error)
            );
    }

    eliminarPersona(index: number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listadopersonas-b4dbf-default-rtdb.firebaseio.com/' + '/datos/' + index + '.json?auth='+token;
        console.log("url de modificarPersona:"+'https://listadopersonas-b4dbf-default-rtdb.firebaseio.com/datos.json');
        this.httpClient.delete(url)
            .subscribe(
                (response) => {
                    console.log("resultado eliminar Persona: " + response);
                },
                (error) => console.log("Error en eliminar Persona: " + error)
            );
    }
}