import { Router, ActivatedRoute } from '@angular/router';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-curso-borrar',
  templateUrl: './curso-borrar.component.html',
  styleUrls: ['./curso-borrar.component.css'],
})
export class CursoBorrarComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService
  ) {}

  id: number;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cursoService
        .getCurso(parseInt(params.get('id')))
        .subscribe((data) => {
          this.id = parseInt(params.get('id'));
          this.cursoService.delCurso(this.id).subscribe((data) => {
            this.router.navigate(['/cursos']);
          });
        });
    });
  }
}
