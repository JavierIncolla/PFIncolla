import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "../../core/components/inicio/inicio.component";
import { AuthGuard } from "../../core/auth.guard";
import { GrillaCursosComponent } from "./components/grilla-cursos/grilla-cursos.component";

const routes: Routes = [
    {path: '', component: InicioComponent, 
        children: [
        {path: 'Cursos', component: GrillaCursosComponent}
      ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}