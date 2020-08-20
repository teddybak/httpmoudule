import { CursoDetallesComponent } from './components/curso-detalles/curso-detalles.component';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursoBorrarComponent } from './components/curso-borrar/curso-borrar.component';
import { CursoNuevoComponent } from './components/curso-nuevo/curso-nuevo.component';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';

const routes: Routes = [
  { path: 'cursos', component: CursoListaComponent },
  { path: 'cursos/:id/editar', component: CursoEditarComponent },
  { path: 'cursos/:id/borrar', component: CursoBorrarComponent },

  { path: 'nuevo', component: CursoNuevoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
