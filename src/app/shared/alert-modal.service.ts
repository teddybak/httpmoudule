import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(
    private modalService: BsModalService,
    private modalRef: BsModalRef
  ) {}

  handleError(tipo: string, message: string) {
    this.modalRef = this.modalService.show(AlertModalComponent);
    this.modalRef.content.tipo = tipo;
    this.modalRef.content.message = message;
  }
}
