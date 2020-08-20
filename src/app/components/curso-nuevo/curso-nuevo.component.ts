import { CursosService } from './../cursos.service';
import { Curso } from './../../interfaces/curso';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-curso-nuevo',
  templateUrl: './curso-nuevo.component.html',
  styleUrls: ['./curso-nuevo.component.css'],
})
export class CursoNuevoComponent implements OnInit {
  constructor(private cursoService: CursosService, private router: Router) {}

  ngOnInit(): void {}

  procesar(valor) {
    this.cursoService.addCurso(valor.value).subscribe((data) => {
      this.router.navigate(['/cursos']);
    });
  }
}
