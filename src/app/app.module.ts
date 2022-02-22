import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarrucelImagenesComponent } from './componentes/carrucel-imagenes/carrucel-imagenes.component';
import { ColumnaComponent } from './componentes/columna/columna.component';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { NotaDestacadaComponent } from './componentes/nota-destacada/nota-destacada.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrucelImagenesComponent,
    ColumnaComponent,
    NoticiaComponent,
    NotaDestacadaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
