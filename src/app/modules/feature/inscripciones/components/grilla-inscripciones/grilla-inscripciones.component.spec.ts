import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrillaInscripcionesComponent } from './grilla-inscripciones.component';


describe('GrillaInscripcionesComponent', () => {
  let component: GrillaInscripcionesComponent;
  let fixture: ComponentFixture<GrillaInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaInscripcionesComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it(
  //   'Las inscripciones se estan cargando correctamente', 
  //   () => {
  //   const fixture = TestBed.createComponent(GrillaInscripcionesComponent);
  //   const controlador = fixture.componentInstance;

  //   fixture.detectChanges();
  //   setTimeout(() => {
  //     expect(controlador.listaInscripciones).toBeTruthy();
  //   }, 5000);
  // })

  // it(
  //   'La informacion se muestra en pantalla',
  //   (done) => {
  //     const fixture = TestBed.createComponent(GrillaInscripcionesComponent);
  //     const vista = fixture.nativeElement as HTMLElement;

  //     fixture.detectChanges();

  //     setTimeout(() => {
  //       expect(vista.querySelector('div')).toBeTruthy();
  //     }, 5000);
  //   }
  // )

});
