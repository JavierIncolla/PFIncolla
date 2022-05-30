import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulePackage } from './material/material.modulePackage';
import { CoreRoutingModule } from './core-routing.module';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/autenticacion/login/login.component';

import { AlumnosModule } from '../feature/alumnos/alumnos.module';
import { CursosModule } from '../feature/cursos/cursos.module';
import { InscripcionesModule } from '../feature/inscripciones/inscripciones.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { RootNavComponent } from 'src/app/modules/core/components/root-nav/root-nav.component';
import { AutenticacionRoutingModule } from './components/autenticacion/autenticacion-routing.module';
import { AlumnosRoutingModule } from '../feature/alumnos/alumnos-routing.module';
import { CursosRoutingModule } from '../feature/cursos/cursos-routing.module';
import { inscripcionesRoutingModule } from '../feature/inscripciones/inscripciones-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    
    PaginaNoEncontradaComponent,
    DialogComponent,
    RootNavComponent
  ],
  imports: [
      CommonModule,
      MaterialModulePackage,  

      AlumnosModule,
      CursosModule,
      InscripcionesModule,
      ReactiveFormsModule,

      //Routings
      AutenticacionRoutingModule,
      AlumnosRoutingModule,
      CursosRoutingModule,
      inscripcionesRoutingModule,

      CoreRoutingModule  
  ],
  exports: [
      MaterialModulePackage,
      CoreRoutingModule,
      
      InicioComponent,
      LoginComponent,

      AlumnosModule,
      CursosModule,
      InscripcionesModule,
      RootNavComponent
  ]
})
export class CoreModule { }
