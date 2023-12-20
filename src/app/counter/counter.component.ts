import { Component } from '@angular/core';

@Component({
  /* al crear un componente personalizado se acostumbra a que tenga un prefijo de "app-" para indicar que es un componente personalizado. Se puede poner otro prefijo pero se aconseja que siempre tenga uno */
  selector: 'app-counter',
  /* template espera a que cree todo mi template como un string, es como si fuera el HTML aquí mismo en línea */
  template: '<h1>Hola Counter</h1>',
  // templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'], // es en array porque se pueden colocar varios estilos
})
export class CounterComponent {}
