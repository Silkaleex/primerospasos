import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css'],
})
export class ColoresComponent implements OnInit {
  colorLocal!: string;

  constructor() {}

  ngOnInit(): void {}
  generarColor(): String {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  colorHex(): String {
    this.colorLocal = '#' + this.generarColor();
    return this.colorLocal;
  }
}
