import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "../../core/components/inicio/inicio.component";
import { AuthGuard } from "../../core/auth.guard";
import { GrillaInscripcionesComponent } from "./components/grilla-inscripciones/grilla-inscripciones.component";

const routes: Routes = [
    {path: '', component: InicioComponent, children: [
        {path: 'Inscripciones', component: GrillaInscripcionesComponent}
      ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class inscripcionesRoutingModule {}