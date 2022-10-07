import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibroclickedService {
  libros: any;
  librosVistos: any;
  constructor() {
    this.libros = [];
  }
  libroVisto() {
    this.libros.push(this.librosVistos);
  }
  verListado() {
    if (this.libros.length > 0) {
      return this.libros;
    } else {
      return false;
    }
  }
}
