/* hay que pensar también en dónde es el lugar correcto para mantener nuestra información, es decir, la data o el estado que se va generando a lo largo que los usuarios usan esta aplicación, entonces por ejemplo, si hay varios elementos donde utilizan la misma data o funciones o lógica, entonces sería conveniente tenerlo en un lugar específico y de ahí poder utilizarlo, en Angular lo trabaja con los 'services' o 'servicios' (https://angular.io/guide/singleton-services) y lo maneja como un singleton pero el singleton nos comúnmente utilizado pero la forma en que lo trabaja Angular es a través de la inyección de dependencias, es decir, nosotros no nos preocupamos de crear una única instancia del servicio sino que nostros la inyectamos y Angular se encarga de proporcionar ese servicio o esa misma instancia de ese servicio a lo largo de la aplicación y utilizar este patrón de inyección de dependencias es muy bueno ya que fomenta hacer la composición en lugar de la herencia entre otras cosas. La función de los servicios es que ahí esté la lógica de negocio para poder manejarla a lo largo de la aplicación */

/* un service básicamente es una clase que se utiliza para encapsular y separar la lógica de negocio y las operaciones de datos de los componentes. Los servicios permiten modularizar y reutilizar la funcionalidad de una aplicación, lo que mejora la organización y mantenimiento del código. */
/* En lugar de tener toda la lógica en los componentes, puedes trasladarla a servicios y luego inyectar esos servicios en los componentes que los necesitan. Esto ayuda a mantener los componentes limpios y enfocados en la presentación visual, mientras que la lógica y las operaciones relacionadas con los datos se gestionan en los servicios. */
/* Por ejemplo, si necesitas realizar peticiones HTTP para obtener datos de un servidor, puedes crear un servicio para manejar esas peticiones. Luego, desde tus componentes, simplemente inyectas el servicio y utilizas sus métodos para obtener los datos. Esto hace que tus componentes sean más sencillos y fáciles de mantener. */
import { Injectable } from '@angular/core';
import { DbzCharacterInterface } from '../interfaces/characters.interface';
import { v4 as uudi } from "uuid";

/* desde Angular 6 se añadió el providedIn: 'root' y si no se utilizara eso entonces se tendría que colocar este servicio en el archivo app.module.ts en la parte de los providers: [], y utilizando el providedIn: 'root' entonces nuestro servicio va a ser un singleton en toda nuestra aplicación, es decir, que podemos utilizar este servicio en cualquier parte de nuestra aplicación las veces que sean necesarias pero mediante la inyección de dependencias y con eso se tendrá el valor actual, es decir, el valor como se encuentra en ese momento */
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  /* la idea de este servicio es que se tenga la data que se quiera manejar */
  /* como se sabe en javascript los objetos se pasan por referencia entonces cualquier acción o modificación que suceda a este objeto de dbzCharacters (es un array pero en forma general todo es un objeto en javascript) entonces lo modificará y eso algo que en ocasiones no se requiere o necesite o no se quiera hacer */
  public dbzCharacters: DbzCharacterInterface[] = [
    {
      id: uudi(),
      name: "Goku",
      power: 9500
    },
    {
      id: uudi(),
      name: "Vegeta",
      power: 7500
    },
    {
      id: uudi(),
      name: "Krillin",
      power: 800
    },
  ]

  onNewCharacterFunction(character: DbzCharacterInterface): void {
    // console.log("Main Page");
    // console.log(character);
    const newCharacter: DbzCharacterInterface = { ...character, id: uudi() }
    this.dbzCharacters.push(newCharacter);
  }

  /* esta función es a través del índice del elemento para fines educativos pero para el proyecto lo haremos a través del id del elemento */
  // onDeleteCharacterFunction(indexElement: number): void {
  //   // console.log("Main Page");
  //   // console.log(indexElement);

  //   /* eliminar el elemento desde el índice que se pasó un elemento a la derecha, quiere decir que el elemento con el indexElement se eliminará */
  //   this.dbzCharacters.splice(indexElement, 1);
  // }

  onDeleteCharacterByIdFunction(idElement: string): void {
    // console.log("Main Page");
    // console.log(idElement);
    this.dbzCharacters = this.dbzCharacters.filter(element => element.id !== idElement)
  }

  constructor() { }
}
