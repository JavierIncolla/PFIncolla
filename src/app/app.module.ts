import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModulePackage } from './modules/core/material/material.modulePackage';
import { ApellidoNombrePipe } from './modules/shared/pipes/apellido-nombre.pipe';
import { AlumnoService } from './modules/shared/services/alumno.service';
import { CursoService } from './modules/shared/services/curso.service';
import { InscripcionCursoService } from './modules/shared/services/inscripcion-curso.service';

import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './modules/core/core-routing.module';
import { LoginService } from './modules/shared/services/login.service';
import { CoreModule } from './modules/core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
     ApellidoNombrePipe
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,    
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModulePackage,
    HttpClientModule,     
    CoreRoutingModule,     
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ name: 'TEST' })
  ],

  providers: [LoginService, AlumnoService, CursoService, InscripcionCursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
