import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { LoginService } from './login/login.service';

//Import desde version 9 en adelante
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private LoginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0H6FXEWl4qAQvVwQgbY0PhEYflmDD3xM',
      authDomain: 'listadopersonas-b4dbf.firebaseapp.com',
    });
  }

  isAutenticado(){
    return this.LoginService.isAutenticado();
  }

  salir(){
    this.LoginService.logout();
  }
}
