import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

describe('Test del componente InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it(
  //   'El inicio se esta cargando correctamente', 
  //   () => {
  //   const fixture = TestBed.createComponent(InicioComponent);
  //   const controlador = fixture.componentInstance;

  //   fixture.detectChanges();
  //   setTimeout(() => {
  //     expect(controlador).toBeTruthy();
  //   }, 5000);
  // })

  // it(
  //   'La informacion se muestra en pantalla',
  //   (done) => {
  //     const fixture = TestBed.createComponent(InicioComponent);
  //     const vista = fixture.nativeElement as HTMLElement;

  //     fixture.detectChanges();

  //     setTimeout(() => {
  //       expect(vista.querySelector('div')).toBeTruthy();
  //     }, 5000);
  //   }
  // )

});
