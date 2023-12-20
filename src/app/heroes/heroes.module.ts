import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroInfoComponent } from './hero-info/hero-info.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [HeroInfoComponent, HeroListComponent],
  exports: [HeroInfoComponent, HeroListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}

/* si se coloca de la forma como se hizo en counter.module.ts aparecerá un warning similar en la consola del navegador y en pocas palabras es que no se tiene el 'CommonModule' que se explica después del warning: */

/* hero-info.component.html:25
  NG0303: Can't bind to 'ngIf' since it isn't a known property of 'button' (used in the 'HeroInfoComponent' component template).
  If the 'ngIf' is an Angular control flow directive, please make sure that either the 'NgIf' directive or the 'CommonModule' is a part of an @NgModule where this component is declared.
*/

/* lo que nos quiere decir básicamente es que no se puede vincular el 'ngIf' debido a que no es una propiedad conocida del 'button' que se está usando en el template del componente 'HeroInfoComponent'. Si este 'ngIf' es parte del flujo de las directivas de Angular entonces esta directiva de 'NgIf' o el 'CommonModule' tiene que ser parte del @NgModule donde el componente está siendo declarado */
/* para solucionarlo entonces hay que saber que esas directivas y otras más vienen de 'CommonModule' que se extrae de '@angular/common' entonces cuando se creen módulos es necesario colocar solo lo que se necesite como por ejemplo esta característica de las directivas y Angular no incluye lo que no necesita al crear un nuevo módulo, por ejemplo en el counter.module no estaría esa característica ya que esas directivas no se usan dentro de counter.component. En el módulo principal que es app.module.ts no veremos el 'CommonModule' porque ya es parte del código que ya se tiene y por eso no es necesario colocarlo, es decir, BrowserModule se encarga de proveer los servicios esenciales para desplegar y ejecutar la app en el navegador, adicionalmente re-exporta CommonModule desde @angular/common, lo que significa que los componentes del módulo AppModule también tienen acceso a las directivas de Angular que toda aplicación necesita, como NgIf y NgFor, entonces esto significa que para el resto de módulos que no sean appModule, es necesario el CommonModule, es decir, que como se extrajo y encapsuló toda la lógica por ejemplo de los heroes en un módulo aparte y sus componentes usan esas directivas de 'ngIf' o 'ngFor' entonces hay que colcoar el 'CommonModule' en los imports de su @NgModule */

/* diferencias sobre imports y declarations: La forma "rápida" es que en declarations solemos poner nuestros componentes referentes a ese módulo, y en imports suelen ir modulos de angular como el CommonModule, FormsModule, etc.
https://stackoverflow.com/questions/39062930/what-is-the-difference-between-declarations-providers-and-import-in-ngmodule/39063231#39063231
https://www.geeksforgeeks.org/what-is-the-difference-between-declarations-providers-and-import-in-ngmodule/
*/
