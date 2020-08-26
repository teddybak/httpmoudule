import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AlertModalService } from '../shared/alert-modal.service';

@NgModule({
  declarations: [AlertModalComponent],
  imports: [CommonModule],
  exports: [AlertModalComponent],
  providers: [AlertModalService],
  entryComponents: [AlertModalComponent], // siginica que este component sera utilizado en tiempo de ejecucion, no dentro de ningun componente o ruta
})
export class SharedModule {}
