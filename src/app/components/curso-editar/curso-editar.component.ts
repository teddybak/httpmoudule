import { Curso } from './../../interfaces/curso';
import { CursosService } from './../cursos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css'],
})
export class CursoEditarComponent implements OnInit {
  data: any;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cursoService
        .getCurso(parseInt(params.get('id')))
        .subscribe((data) => {
          this.data = data;
          this.id = parseInt(params.get('id'));
        });
    });
  }

  procesar(curso: Curso) {
    curso = {
      id: this.data.id,
      title: curso.title,
    };
    this.cursoService.patchCurso(curso, this.id).subscribe((data) => {
      this.router.navigate(['/cursos']);
    });
  }
}
