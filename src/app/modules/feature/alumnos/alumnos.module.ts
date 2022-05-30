import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulePackage } from 'src/app/modules/core/material/material.modulePackage';
import { CrudAlumnoComponent } from './components/crud-alumno/crud-alumno.component';
import { GrillaAlumnosComponent } from './components/grilla-alumnos/grilla-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
     CrudAlumnoComponent,
     GrillaAlumnosComponent
  ],
  imports: [
    MaterialModulePackage,
    CommonModule,
    ReactiveFormsModule,
    
    
  ]
})
export class AlumnosModule { }
