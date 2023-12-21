import { Component, EventEmitter, Output } from '@angular/core';
import { DbzCharacterInterface } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-components-form-characters',
  templateUrl: './form-characters.component.html',
  styleUrls: ['./form-characters.component.css']
})
export class FormCharactersComponent {
  /* este ejercicio se hará usando el two way data binding (que se pueda cambiar el valor de la propiedad desde este archivo ts y también si se cambia desde el html se vea reflejado aquí) que no sería lo recomendado ya que puede causar efectos indeseados o inconsistencias ya que al estar pendiente de ambos lugares entonces para manejo de formularios se recomienda no hacerlo ya que puede causar efectos indeseados */

  /* propiedad con un estado inicial y pares llave/valor del input */
  public character: DbzCharacterInterface = {
    name: "",
    power: 0
  };

  /* el EventEmitter es bien flexible por ser un genérico, puede emitir string, number, objetos, arreglos, etc... pero en nuestro caso queremos emitir algo que será de tipo DbzCharacterInterface y con todo lo de abajo creamos nuestra instancia de este emisor de eventos o EventEmitter. Se puede colocar public para mentener la misma sintaxis y que todo luzca igual. Ahora faltaría decorar esta propiedad con el @Output para poder conectarme del main-page.component.html para que esté escuchando este onNewCharacter y funcione todo de la manera correcta y ahora ya se puede emitir este onNewCharacter y usarlo como en este caso en el addCharacter() para emitir el personaje que se creó al componente padre main-page.component.ts y poder tomar el valor en el onNewCharacterFunction */
  @Output()
  public onNewCharacter: EventEmitter<DbzCharacterInterface> = new EventEmitter()

  addCharacter(): void {
    console.log(this.character);

    if (this.character.name.trim().length === 0) return;

    /* emitir el valor actual que tiene el objeto character (serían los valores del input en el momento actual al enviar el submit del formulario) */
    this.onNewCharacter.emit(this.character);
    /* como javascript pasa por referencia entonces se puede crear un nuevo objeto y hacer el spread-operator y mandar las propiedades en un nuevo objeto aunque Angular también se va a encargar de eso por nosotros */
    // this.onNewCharacter.emit({ ...this.character });

    this.character.name = "";
    this.character.power = 0;
  }
}

/* ************************************************************************************************************** */
/* @Output define una salida del componente que el componente padre puede suscribirse para escuchar. El concepto de suscripciones es algo que va relacionado con RXJS pero aquí también es aplicable y lo de RXJS es una librería pre-cargada en Angular para trabajar con programación reactiva. Básicamente todo lo relacionado a Observables, es de rxjs y un observable es un objeto en el cual a lo largo del tiempo, puede estar emitiendo diferentes valores. Usualmente cuando hablamos de “suscribirmos a los observables”, significa estar escuchando las emisiones que ese objeto estará emitiendo a lo largo de su vida */

/* todo lo anterior quiere decir que si vamos a main-page.component.html en donde el componente personalizado <app-dbz-components-form-characters></app-dbz-components-form-characters> eventualmente puede o no emitir valores y esos valores los necesitamos ya que si nos fijamos en main-page.component.ts la propiedad dbzCharacters se encarga del listado de personajes con dbzCharacters entonces de alguna manera (porque hay varias) el componente personalizado <app-dbz-components-form-characters></app-dbz-components-form-characters> me tiene que dar la información necesaria para poder obtener ese personaje añadido e insertarlo en el arreglo de dbzCharacters y una vez insertado entonces Angular automáticamente se encargará de propagar todos los cambios a ese arreglo del listado y para eso solo nos tenemos que preocupar que llegue la información correctamente e insertarlo al arreglo y para realizar eso tenemos que emitir ese valor */

/* ************************************************************************************************************** */
/* ¿Por qué usar @Output para la accion de agregar el personaje? */
/* me parece interesante que el componente hijo tenga que emitir un evento hacia el padre, no se podría usar @Input para pasarle una función del padre al hijo que modifique el array de personajes en el padre y que esa función la ejecutemos en la función de agregar después de validar la condición del nombre (Algo parecido a React y los props) */

/* usar @Output para la acción de agregar un personaje en Angular es una buena práctica porque sigue el patrón de comunicación entre componentes unidireccional, donde los datos fluyen desde el componente padre hacia el hijo mediante @Input, y desde el hijo hacia el padre mediante @Output. */
/* Si bien técnicamente se podría utilizar @Input para pasar una función al hijo y modificar el array de personajes en el padre, esta aproximación puede llevar a una estructura menos clara y dificultar el mantenimiento del código a medida que la aplicación crece en complejidad. */
/* El uso de @Output y el evento Emitter permiten un acoplamiento más débil entre componentes (que no dependan tanto uno del otro) y facilitan la comprensión de la lógica de comunicación en la aplicación. Además, Angular ofrece una sintaxis clara y consistente para manejar eventos y cambios de estado, lo que hace que el código sea más predecible y legible. */
/* Mientras que en React se utilizan props para pasar funciones desde el padre hacia el hijo, en Angular se sigue un enfoque más orientado a eventos con @Output y EventEmitter, lo que ayuda a mantener una estructura más organizada y escalable en la aplicación. */
