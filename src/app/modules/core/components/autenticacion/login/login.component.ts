import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/modules/shared/models/usuario';
import { LoginService } from 'src/app/modules/shared/services/login.service';
import { CargandoUsuarioSesion } from 'src/app/modules/state/usuario.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 
  '../../../../../../assets/fonts/iconic/css/material-design-iconic-font.css']
})
export class LoginComponent implements OnInit {


  formularioLogin:FormGroup=new FormGroup({
    usuario:new FormControl('',[Validators.required, Validators.email]),
    contrasena: new FormControl('',[Validators.required])
  });

  constructor(private servicioLogin: LoginService, private store: Store) { }

  ngOnInit(): void {
  }

  login(){
    this.servicioLogin.loguearse(this.formularioLogin.value.usuario, this.formularioLogin.value.contrasena).subscribe((usuario: Usuario)=>{    
      if(usuario)
      {
          this.store.dispatch(CargandoUsuarioSesion({sesionUsuario:usuario}));
      }
      else
        {
            alert("Credenciales incorrectas, verifique los datos. Usuario o contraseña incorrectos");
        } 
      })
  }

}
