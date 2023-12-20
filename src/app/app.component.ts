/* este archivo es el corazón y el archivo principal del componente */
import { Component } from '@angular/core';

interface OperationsInterface {
  [calcType: string]: () => void;
}

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

  /* forma para mejorar la legibilidad del código aunque hacer así o como arriba es lo mismo */
  public title: string = 'Mi primera App de';
  public name: string = 'Angular';
  public counter: number = 10;

  /* para los métodos no es tan usual verlo con public, si es usual ver private o static pero public no es tan usual ya que por defecto es public */
  calculate(calcType: string, value: number): void {
    const operations: OperationsInterface = {
      increment: () => {
        // this.counter = this.counter + 1;
        this.counter += value;
      },
      decrement: () => {
        if (this.counter !== 0) this.counter -= value;
      },
    };

    const operation = operations[calcType];

    if (operation) {
      operation();
    } else {
      console.error('Invalid type:', calcType);
    }
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
