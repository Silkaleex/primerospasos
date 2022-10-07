import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'primerospasos';
  condicion!: boolean;
  so!: string;
  color!: String;
  verAutor!: String;
  libros: { id: string; titulo: string; autor: string }[];
  constructor() {
    this.libros = [
      { id: '1', titulo: 'Te veré bajo el hielo', autor: 'Robert Bryndza' },
      { id: '2', titulo: 'Dime quién soy', autor: 'Julia Navarro' },
      {
        id: '3',
        titulo: 'El día que se perdió la cordura',
        autor: 'Javier Castillo',
      },
    ];
  }
  showAuthor(_libro: { autor: string; titulo: any }) {
    this.verAutor = 'Escrito por: ' + _libro.autor;
    alert(this.verAutor);
    console.log(_libro.titulo, 'Escrito por:', _libro.autor);
  }
}
