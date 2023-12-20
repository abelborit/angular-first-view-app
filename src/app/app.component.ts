/* este archivo es el corazón y el archivo principal del componente */
import { Component } from '@angular/core';

/* @Component es un decorador para transformar mi clase en un componente */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // es en array porque se pueden colocar varios estilos
})
export class AppComponent {
  /* las propiedades de aquí tiene una relación con el app.component.html es por eso que se puede llamar o utilizar con doble llave {{}} y hacer referencia a estas propiedades */

  /* forma corta de TypeScript para definir propiedades */
  // title = 'angular-first-view-app';

  /* forma para mejorar la legibilidad del código aunque hacerlo así o como arriba es lo mismo solo que de esta forma da un poco más de información como el tipo y el nivel de acceso */
  public title: string = 'Mi primera App de';
  public name: string = 'Angular';
}
