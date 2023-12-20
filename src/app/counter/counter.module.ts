import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

/* este módulo pretende agrupar toda la funcionalidad de mi counter.component y al trabajar con módulos estos módulos van a ser visibles dentro del módulo como tal, es decir, que se va a poder utilizar el counter.component en todo el scope del path counter/components sin problemas porque todo ese scope está envuelto en mi CounterModule pero como también queremos usar el counter.component fuera de este módulo y usarlo por ejemplo en el app.component.html donde este archivo está en otro módulo, entonces hay que exponer este CounterModule al exterior ya que la finalidad de un módulo es que esté encapsulado y protegido del exterior pero en este caso lo tenemos que exponer para que pueda ser usado en el exterior sin problemas */
/* Haciendo lo anterior aún no se soluciona el problema de poder usarlo en el exterior y directamente por ejemplo en el app.component.html ya que también tenemos que decirle a la aplicación de Angular que dispone de este módulo para poder trabajar y usar todo lo que ofrece */
@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent], // la configuración exports: [] se usa para hacer públicos todos los componentes y otras cosas que pertenezcan al módulo
})
export class CounterModule {}
