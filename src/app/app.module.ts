import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroesModule, DbzModule], // colocar o declarar los módulos que creemos
  providers: [],
  bootstrap: [AppComponent], // nos está indicando que el componente AppComponent será lanzado al iniciar la aplicación
})
export class AppModule { }
