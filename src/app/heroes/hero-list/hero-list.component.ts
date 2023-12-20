import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Thor',
    'Hulk',
    'Dr. Strange',
    'Black Widow',
    'Hawkeye',
  ];
  public deletedHero?: string; // o colocar: public deletedHero: string = '' pero se tendría que colocar también this.deletedHero = this.heroNames.pop() || ''; o alguna validación para evitar que retorne undefined pero al colocar como opcional entonces puede o no venir la propiedad

  /* no se coloca un return porque básicamente usaremos return cuando necesitemos trabajar con la data que devuelve ese método. En este caso, removeLastHero() lo hace todo dentro de el mismo, y la data que devuelve no la usamos ya que ya tenemos acceso al array heroes. Se puede colocar return y funcionará, pero realmente no vamos a usar esa información que retorna. */
  public removeFirstHero(): void {
    this.deletedHero = this.heroNames.shift();
  }
  public removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
