import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { DbzCharacterInterface } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-pages-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  /* habiendo pasado toda la lógica de negocio o la data al dbz.service.ts entonces se romperá nuestra aplicación pero aquí entra un concepto importante que es la inyección de dependencias que se hará mediante el constructor y lo que hará es que me habilitará en todo el componente de la clase MainPageComponent y lo que lleva en su interior como otros componentes, etc, lo que tiene el servicio DbzService y darse cuenta que dbzServiceInyection es la instancia de una clase (es una instancia de DbzService) entonces puedo ingresar a las propiedades y métodos que tiene en su interior */

  /* hay veces donde se colocará como public la parte de los servicios en su inyección de dependencias ya que es una forma más directa de conectar este servicio con su main-page.component.html pero siguiendo las buenas prácticas de Angular nos dice que los servicios deberían ser privados pero entonces eso significa que ya no se tendrá acceso a dbzServiceInyection ni sus propiedades o métodos. Una de las razones de hacer los servicios privados es que por ejemplo si se importa este MainPageComponent en otro lugar o se está usando de manera directa entonces técnicamente también se expondría su servicio y ese servicio no debería ser público de esa manera porque luego se podría hacer referencia al MainPageComponent y entrar a su servicio como dbzServiceInyection y luego a sus propiedades y cambiar algo y esa no debería ser la forma en cómo probarlo o ejecutarlo entre otras razones más */
  /* al colocarlo como private entonces vemos que hay varios errores en el main-page.component.html ya que no se podría ingresar de forma directa a dbzServiceInyection entonces al estar en esta clase de MainPageComponent se pueden usar getters, setters, métodos, etc. y entonces al ser privado este servicio se hará uso de los getters */
  // constructor(public dbzServiceInyection: DbzService) { }
  constructor(private dbzServiceInyection: DbzService) { }

  /* los getters tienen que retornar algo, es decir, se hará uso del return. Aquí sí tengo acceso al servicio pero si se hacen modificaciones desde aquí entonces se verá afectado el estado en este caso el arreglo de dbzCharacters lo que algunas veces puede ser necesario porque vendrán los datos de la base de datos o de una REST Api pero gran parte de las veces no será así como en este caso entonces se hará uso del spread operator para generar como una copia del estado pero dentro de un arreglo para generar lo mismo pero con una referencia en memoria distinta y con eso nos evitamos tocar el estado original. Ahora con este get ya se puede utilizar directo en el html */
  get charactersList(): DbzCharacterInterface[] {
    return [...this.dbzServiceInyection.dbzCharacters]
  }

  /* ahora tengo funciones propias de esta clase que hacen uso del servicio que es privado lo cual es un poco más ordenado y también mejora la legibilidad del código muy aparte que mentiene el servicio más seguro de poder manipularlo directamente */
  onDeleteCharacterById(idElement: string): void {
    this.dbzServiceInyection.onDeleteCharacterByIdFunction(idElement)
  }

  onNewCharacter(character: DbzCharacterInterface): void {
    this.dbzServiceInyection.onNewCharacterFunction(character)
  }
}
