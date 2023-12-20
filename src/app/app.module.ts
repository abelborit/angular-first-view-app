import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroInfoComponent } from './heroes/hero-info/hero-info.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';

@NgModule({
  declarations: [AppComponent, HeroInfoComponent, HeroListComponent],
  imports: [BrowserModule, CounterModule], // colocar o declarar los módulos que creemos
  providers: [],
  bootstrap: [AppComponent], // nos está indicando que el componente AppComponent será lanzado al iniciar la aplicación
})
export class AppModule {}
