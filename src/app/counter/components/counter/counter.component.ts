import { Component } from '@angular/core';

interface OperationsInterface {
  [calcType: string]: () => void;
}

@Component({
  /* al crear un componente personalizado se acostumbra a que tenga un prefijo de "app-" para indicar que es un componente personalizado. Se puede poner otro prefijo pero se aconseja que siempre tenga uno */
  selector: 'app-counter',
  /* template espera a que cree todo mi template como un string, es como si fuera el HTML aquí mismo en línea */
  template: `
    <h3>Counter: {{ counter }}</h3>
    <!-- (click)="calculate()" se podría colocar el this.calculate() porque tecnicamente funcionaría pero en el lado del HTML sería como redundante hacerlo porque ya sabe que está haciendo referencia al archivo de TypeScript (.ts) y es raro ver ese this. -->
    <button class="btn btn-primary mx-1" (click)="calculate('increment', 2)">
      +2
    </button>
    <button class="btn btn-primary mx-1" (click)="calculate('increment', 1)">
      +1
    </button>
    <button class="btn btn-primary mx-1" (click)="resetCounter()">Reset</button>
    <button class="btn btn-primary mx-1" (click)="calculate('decrement', 1)">
      -1
    </button>
    <button class="btn btn-primary mx-1" (click)="calculate('decrement', 2)">
      -2
    </button>
    <button class="btn btn-primary mx-1" (click)="calculate('decrementar', 4)">
      -4
    </button>
  `,
  // templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'], // es en array porque se pueden colocar varios estilos
})
export class CounterComponent {
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
