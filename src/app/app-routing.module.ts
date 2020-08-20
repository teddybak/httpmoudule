import { CursoNuevoComponent } from './components/curso-nuevo/curso-nuevo.component';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cursos', component: CursoListaComponent },
  { path: 'nuevo', component: CursoNuevoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
