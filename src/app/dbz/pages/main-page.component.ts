import { Component } from '@angular/core';
import { DbzCharacterInterface } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-pages-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public dbzCharacters: DbzCharacterInterface[] = [
    {
      name: "Goku",
      power: 9500
    },
    {
      name: "Vegeta",
      power: 7500
    },
    {
      name: "Krillin",
      power: 800
    },
  ]

  onNewCharacterFunction(character: DbzCharacterInterface): void {
    console.log("Main Page");
    console.log(character);

  }
}
