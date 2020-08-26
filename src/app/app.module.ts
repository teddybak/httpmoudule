import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { CursoNuevoComponent } from './components/curso-nuevo/curso-nuevo.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CursoBorrarComponent } from './components/curso-borrar/curso-borrar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursoDetallesComponent } from './components/curso-detalles/curso-detalles.component';
import { SharedModule } from './shared/shared.module';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursoListaComponent,
    CursoNuevoComponent,
    CursoBorrarComponent,
    CursosComponent,
    CursoEditarComponent,
    CursoDetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent],
})
export class AppModule {}
