import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroInfoComponent } from './heroes/hero-info/hero-info.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, HeroInfoComponent, HeroListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
