import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudInscripcionComponent } from './components/crud-inscripcion/crud-inscripcion.component';
import { GrillaInscripcionesComponent } from './components/grilla-inscripciones/grilla-inscripciones.component';
import { MaterialModulePackage } from '../../core/material/material.modulePackage';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
     CrudInscripcionComponent,
     GrillaInscripcionesComponent
  ],
  imports: [
    MaterialModulePackage,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InscripcionesModule { }
