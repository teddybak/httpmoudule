import { Curso } from './../../interfaces/curso';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css'],
})
export class CursoListaComponent implements OnInit {
  constructor(private cursoServicio: CursosService) {}
  cursos: Curso[];
  ngOnInit(): void {
    this.cursoServicio.getCursos().subscribe((response: any) => {
      this.cursos = response;
    });
  }
}
