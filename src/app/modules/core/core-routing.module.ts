import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthGuard } from './auth.guard';
import { GrillaInscripcionesComponent } from "../feature/inscripciones/components/grilla-inscripciones/grilla-inscripciones.component";
import { GrillaAlumnosComponent } from "../feature/alumnos/components/grilla-alumnos/grilla-alumnos.component";
import { LoginComponent } from "./components/autenticacion/login/login.component";
import { GrillaCursosComponent } from "../feature/cursos/components/grilla-cursos/grilla-cursos.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'inicio',
        component: InicioComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', component: InicioComponent,
                // canActivate: [AuthGuard]
            },            
            {
                path: 'Alumnos',               
                //loadChildren: () => import('../feature/alumnos/alumnos.module').then(a => a.AlumnosModule),
                component: GrillaAlumnosComponent,
                // canActivate: [AuthGuard]
            },
            {
                path: 'Cursos',               
                //loadChildren: () => import('../feature/cursos/cursos.module').then(c => c.CursosModule),
                component: GrillaCursosComponent,
                // canActivate: [AuthGuard]
            },
            {
                path: 'Inscripciones',
                component: GrillaInscripcionesComponent
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule { }