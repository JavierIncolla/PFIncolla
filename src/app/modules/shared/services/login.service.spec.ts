import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
//import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoginService', () => {
  let service: LoginService;
  let mockapi_URL = 'https://626988bdf2c0cdabac100e2a.mockapi.io/ApiRest/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoginService,
        //AppRoutingModule
        Router
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('deberia crearse', () => {
    expect(service).toBeTruthy();
  });

  it(
    'El login funciona correctamente',
    inject([HttpTestingController, LoginService], 
    (httpMock: HttpTestingController, LoginService: LoginService) => {
      const mockUsuario: Usuario[] =[
        new Usuario( 4, "Mario", "Baracu", 25, "Cordoba", "marioBaracu@mail.com", 2)
    ];

      LoginService.login("marioBaracu@mail.com", "asd").subscribe((user) => {
        console.log(user);
        expect(user[0].id).toEqual(4);
      });

      const req = httpMock.expectOne({
        method: 'GET',
        url: mockapi_URL + '/usuarios'
      });
      req.flush(mockUsuario);
    }
    )
  )
});