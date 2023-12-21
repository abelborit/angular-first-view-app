import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { FormCharactersComponent } from './components/form-characters/form-characters.component';

@NgModule({
  declarations: [MainPageComponent, ListCharactersComponent, FormCharactersComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule { }

/* para utilizar este módulo no basta con tener la etiqueta export class ya que Angular internamente no funciona solo con eso, es decir, si exportamos DbzModule como 'export class DbzModule { }' podremos importar el mismo, pero los componentes importados en este módulo son únicamente de este módulo hasta que indiquemos explícitamente que queremos exportarlo hacia el exterior usando 'exports: [MainPageComponent, ......],' */
