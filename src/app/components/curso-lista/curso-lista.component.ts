import { Curso } from './../../interfaces/curso';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css'],
})
export class CursoListaComponent implements OnInit {
  constructor(
    private cursoServicio: CursosService,
    private alertService: AlertModalService
  ) {}
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  ngOnInit(): void {
    this.cursos$ = this.cursoServicio.getCursos().pipe(
      catchError((error) => {
        this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {
    this.alertService.handleError(
      'danger',
      'no se han podido cargar adecuadamente los curso'
    );
  }
}
