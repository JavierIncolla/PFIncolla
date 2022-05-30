import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/models/usuario';
import { LoginService } from '../shared/services/login.service';
import { AutenticacionService } from './autenticacion.service';

import { Store } from '@ngrx/store';
import { selectUsuario } from '../state/usuario.selectors';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  
  private sesionDeUsuario?: Usuario;

  constructor(
    //private autenticacion: AutenticacionService,
    private router: Router,
    //private loginService:LoginService,
    private store: Store
  )
  {
    this.store.select(selectUsuario)
    .subscribe(sesionUsuario =>
      { this.sesionDeUsuario = sesionUsuario.usuarioEnSesion});
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    // if(!this.loginService.obtenerSesionActiva()){
     
    //   console.log('No está autenticado');
    //   return this.router.navigate(['/autenticacion/login']).then(() => false);
    // }
    // else{      
    //   return true;
    // }

    if (this.sesionDeUsuario==undefined) {
      return this.router.navigate(['/login']).then(() => false);
    }
    
      if (this.sesionDeUsuario?.id > 0) 
      {
        
        return true;
      }
      else
      {
        return this.router.navigate(['/login']).then(() => false);
      }
    
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.sesionDeUsuario==undefined) {
      return this.router.navigate(['/autenticacion/login']).then(() => false);
    }
    else
    {
      if (this.sesionDeUsuario.id == 0) 
      {
        return this.router.navigate(['/autenticacion/login']).then(() => false);
      
      }
      else
      {
        return true;
      }
    }
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
