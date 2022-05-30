import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "../../core/components/inicio/inicio.component";
import { AuthGuard } from "../../core/auth.guard";
import { GrillaAlumnosComponent } from "./components/grilla-alumnos/grilla-alumnos.component";

const routes: Routes = [
    {path: '', component: InicioComponent, 
        children: [
        {path: 'Alumnos', component: GrillaAlumnosComponent}
      ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlumnosRoutingModule { }