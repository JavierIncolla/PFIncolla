import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudCursoComponent } from './components/crud-curso/crud-curso.component';
import { GrillaCursosComponent } from './components/grilla-cursos/grilla-cursos.component';
import { MaterialModulePackage } from '../../core/material/material.modulePackage';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
     CrudCursoComponent,
     GrillaCursosComponent
   ],
  imports: [
    MaterialModulePackage,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
