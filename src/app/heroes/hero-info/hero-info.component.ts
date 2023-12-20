import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css'],
})
export class HeroInfoComponent {
  /* el one way data binding o el enlazado de una sola vía es que esta propiedad tiene el poder sobre lo que se coloca en el .html como los {{ name }} o {{ age }}  pero Angular en general maneja el two way data binding, es decir, que si se hace un cambio desde el lado del template del html entonces también se modifica el name aquí y en nuestras aplicaciones de Angular hay que priorizar el one way data binding, es decir, priorizar que desde este archivo se cambie la información por una sola vía y Angular es suficientemente inteligente como para evitar ciclos de que se hace una modificación desde el template del HTML y luego se cambia aquí y como se cambió entonces vuelve a renderizar en el HTML y haciendo un ciclo y para evitar posibles errores o algo entonces hay que evitar el two way data binding hasta donde sea posible */
  public name: string = 'ironman';
  public age: number = 45;

  /* esto viene a ser un método entonces al invocarlo se invoca haciendo uso de paréntesis para llamar a la función. Al colocar por ejemplo this. y con el intellisense veremos que los métodos tienen un color diferente a la de las propiedades, en este caso los métodos son de color morado por el tema que se tiene en Visual Studio Code */
  /* si se coloca como private entonces nos saldrá un error en el .html diciendo que getHeroDescription es privado, esto quiere decir que este método getHeroDescription no se podrá usar fuera del scope de esta clase HeroInfoComponent */
  getHeroDescription(): string {
    /* este log puede aparecer varias veces en la consola y esto se debe a hay que tener en cuenta que Angular puede redibujarse, y estamos trabajando también con el build de desarrollo. Podemos usar métodos directamente en el HTML como lo hicimos colocando {{ getHeroDescription() }} pero no tenemos que abusar del uso de los mismos, por ejemplo, si fuera una data o un método muy pesado que quieres asegurarte que únicamente es ejecutado una vez, entonces ahí lo ideal sería implementarlo en el OnInit y luego únicamente referenciar la variable en el HTML ya con la data. */
    // console.log('render');

    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.name = 'Spiderman';
  }
  changeHeroAge(): void {
    this.age = 25;
  }

  /* Los getters y setters no son más que una forma de proporcionar acceso a las propiedades de un objeto. */
  /* getters son como propiedades pero que en realidad vendrían a ser métodos, entonces estos se invocan sin parentesis ya que son tratados como "propiedades" entre comillas */
  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }
}

/* ************************************************************************************************************** */
/* La diferencia en el manejo de las variables con funciones y getters radica en el propósito y comportamiento deseado para cada caso. */

/* En el método calculate(calcType: string, value: number): void, se utiliza una función para realizar una acción específica, que es incrementar o decrementar el contador por el value proporcionado. Por otro lado, en el getter capitalizedName(): string, se utiliza un getter para obtener el valor calculado del nombre en mayúsculas cada vez que se accede a capitalizedName. La opción de asignar directamente public capitalizedName = this.name.toUpperCase() podría funcionar, pero solo se calcularía una vez al crearse la instancia, y si el valor de this.name cambia después, el getter garantizará que siempre se obtenga el valor actualizado del nombre en mayúsculas cuando se acceda a capitalizedName. Al final la elección depende de las necesidades específicas del comportamiento que se quiera lograr en cada caso. */

/* La decisión de utilizar un método get o una propiedad depende de la lógica y el comportamiento que deseas implementar. Las propiedades son apropiadas cuando necesitas acceder a un valor almacenado en la instancia de una clase de manera directa y sencilla. Los métodos get son útiles cuando deseas calcular o procesar un valor antes de devolverlo, o cuando quieres encapsular la lógica de obtención de un valor detrás de una interfaz simple. Los métodos get también pueden serte útiles si deseas realizar algún tipo de validación o lógica adicional cada vez que se accede al valor. En pocas palabras te recomendaría utilizar propiedades para valores simples y directos, y métodos get cuando necesites realizar cálculos o encapsular alguna lógica de obtención. */

/* ************************************************************************************************************** */
/* utilizar :void o dar el retorno de una función como :string */
/* En este caso, como ejemplo el getHeroDescription() nos devuelve un string, y el return (valor) se hace presente al momento de llamar a la función en el HTML. Ahora, el caso de changeHeroName() o changeHeroAge() no necesitamos el heroe o la edad, aquí simplemente estamos ejecutando un evento para cambiar sus valores y no para obtener esos valores. Es decir, colocarlo de ambas formas funciona de igual manera, pero no es necesario hacerlo así ya que no estamos obteniendo ningún valor. */
