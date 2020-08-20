import { tap } from 'rxjs/operators';
import { Curso } from './../interfaces/curso';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  base_url = environment.base_url;
  constructor(private http: HttpClient) {}

  getCursos() {
    return this.http.get<Curso[]>(`${this.base_url}/curso`).pipe(tap());
  }

  addCurso(curso: Curso) {
    return this.http.post(`${this.base_url}/curso`, curso);
  }

  getCurso(id: number) {
    return this.http.get<Curso>(`${this.base_url}/curso/${id}`).pipe(tap());
  }

  patchCurso(curso: Curso, id: number) {
    return this.http.put(`${this.base_url}/curso/${id}`, curso);
  }

  delCurso(id: number) {
    return this.http.delete(`${this.base_url}/curso/${id}`).pipe(tap());
  }
}
