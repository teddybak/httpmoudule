import { Curso } from './../../interfaces/curso';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css'],
})
export class CursoListaComponent implements OnInit {
  constructor(private cursoServicio: CursosService) {}
  cursos$:Observable<Curso[]>;
  ngOnInit(): void {
    this.cursos$ = this.cursoServicio.getCursos();
  }
}
