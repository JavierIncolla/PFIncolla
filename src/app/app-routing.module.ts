import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/core/components/autenticacion/login/login.component';
import { AuthGuard } from './modules/core/auth.guard';
import { GrillaAlumnosComponent } from './modules/feature/alumnos/components/grilla-alumnos/grilla-alumnos.component';
import { GrillaCursosComponent } from './modules/feature/cursos/components/grilla-cursos/grilla-cursos.component';
import { GrillaInscripcionesComponent } from './modules/feature/inscripciones/components/grilla-inscripciones/grilla-inscripciones.component';
import { PaginaNoEncontradaComponent } from './modules/core/components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  
  {   path: '', redirectTo: 'login', pathMatch: 'full'},
  {   path: 'login', component: LoginComponent},
  // {   path: 'autenticacion',
  //     loadChildren: () => import('./modules/core/components/autenticacion/autenticacion.module').then(m => m.AutenticacionModule) // lazy loading
  // }
  {   path: '**',
      component: PaginaNoEncontradaComponent
  }

  

  // {
  //   path: 'Alumnos',
  //   component: GrillaAlumnosComponent
  // },
  // {
  //   path: 'Inscripciones',
  //   component: GrillaInscripcionesComponent
  // },
  // {
  //   path: 'Cursos',
  //   component: GrillaCursosComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
