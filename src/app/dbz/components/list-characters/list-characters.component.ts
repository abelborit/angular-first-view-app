import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzCharacterInterface } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-components-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent {
  /* el decorador @Input() se utiliza para la comunicación entre componentes, define una propiedad que puede ser enviada desde el componente padre hacia el componente hijo. Entonces para permitir esa comunicación la propiedad que queremos recibir desde el exterior va a tener el decorador @Input() y con solo colocar ese decorador sobre la propiedad ya podemos hacer varias cosas, es decir, estamos diciendo que mi ListCharactersComponent puede recibir o no una propiedad llamada dbzCharactersList. Si queremos cambiar el nombre de la propiedad lo podemos hacer en el decorador de la siguiente forma @Input('otroNombre') y si es undefined (no se pasa ningún nombre) entonces será el mismo nombre de la propiedad que usaremos en el exterior. Entonces lo que tenga esta propiedad en este archivo será el valor por defecto si es que no me mandan nada desde el exterior */
  @Input()
  public dbzCharactersList: DbzCharacterInterface[] = [
    /* valor por defecto si el componente padre no me envía nada */
    {
      name: "Trunks (baby)",
      power: 50
    },
  ]

  /* emitir el índice del personaje a eliminar desde el componente hijo al componente padre */
  // @Output()
  // public handleDeleteCharacterEmitter: EventEmitter<number> = new EventEmitter()
  /* también se podría colocar de esta forma pero es más explícita la línea de arriba */
  // public handleDeleteCharacterEmitter = new EventEmitter<number>()

  // handleDeleteCharacter(indexElement: number): void {
  //   // console.log(indexElement);
  //   this.handleDeleteCharacterEmitter.emit(indexElement)
  // }

  /* emitir el índice del personaje a eliminar desde el componente hijo al componente padre */
  @Output()
  public handleDeleteCharacterEmitter: EventEmitter<string> = new EventEmitter()

  handleDeleteCharacterById(idElement?: string): void {
    if (!idElement) return;

    this.handleDeleteCharacterEmitter.emit(idElement)
  }
}
