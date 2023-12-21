import { Component, Input } from '@angular/core';
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
}
