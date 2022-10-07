import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rendermo',
  templateUrl: './rendermo.component.html',
  styleUrls: ['./rendermo.component.css'],
})
export class RendermoComponent implements OnInit {
  alumnos: any;
  clearElement!: HTMLElement;
  constructor(private ren: Renderer2) {
    this.alumnos = [
      { nombre: 'David', id: 1 },
      { nombre: 'Jorge', id: 2 },
      { nombre: 'Luisa', id: 3 },
      { nombre: 'Monica', id: 4 },
    ];
  }

  ngOnInit(): void {}
  activeMethod(element: HTMLElement) {
    if (this.clearElement) {
      this.ren.removeClass(this.clearElement, 'miClass');
    }
    let nuevoElemento = this.ren.createElement('span');
    this.ren.setProperty(nuevoElemento, 'innerHTML', '¡!');
    this.ren.appendChild(element, nuevoElemento);

    this.ren.setAttribute(element, 'data-select', 'true');
    this.ren.addClass(element, 'miClass');
    this.clearElement = element;
  }
}
