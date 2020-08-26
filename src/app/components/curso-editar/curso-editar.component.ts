import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { Observable, pipe, Subject, empty } from 'rxjs';
import { Curso } from './../../interfaces/curso';
import { CursosService } from './../cursos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css'],
})
export class CursoEditarComponent implements OnInit {
  data$: Observable<Curso>;
  id: number;
  error$ = new Subject<boolean>();
  mensaje = 'Curso modificado satisfactoriamente';

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router,
    private cursoServicio: CursosService,
    private alertService: AlertModalService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.data$ = this.cursoService.getCurso(parseInt(params.get('id'))).pipe(
        catchError((error) => {
          this.error$.next(true);
          return empty();
        })
      );
      this.id = parseInt(params.get('id'));
    });
  }

  procesar(curso: Curso) {
    this.cursoService.patchCurso(curso, this.id).subscribe((data) => {
      this.showSussesfullMessage();
      this.router.navigate(['/cursos']);
    });
  }

  showSussesfullMessage() {
    this.alertService.handleError(
      'success',
      'El registro se ha modificado satisfactoriamente'
    );
  }
}
