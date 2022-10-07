import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libros: any;
  verAutor!: String;
  errorHttp!: boolean;
  LibroClicked: any;
  cargando!: boolean;
  constructor(
    private http: HttpClient,
    public libroClicked: LibroclickedService
  ) {
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

  cargarLista() {
    this.http.get('assets/lista-libros.json').subscribe({
      next: (respuesta: any) => {
        this.libros = respuesta;
        this.cargando = false;
      },
      error: (respuesta: Response) => {
        this.errorHttp = true;
      },
    });
  }
  ngOnInit(): void {
    this.cargarLista();
  }
  agregarLibro(_libroVisto: any) {
    this.LibroClicked.libroVisto(_libroVisto);
  }
}
