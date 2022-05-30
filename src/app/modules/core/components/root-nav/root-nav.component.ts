import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/shared/services/login.service';
import { Store } from '@ngrx/store';
import { selectUsuario } from 'src/app/modules/state/usuario.selectors';

@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css']
})
export class RootNavComponent implements OnInit{

  titulo: string = 'Presentación Final Incolla';  
  usuario!: any;
  nombreUsuario: string ="";
  perfilUsuario: string ="";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    ); 

  constructor(private breakpointObserver: BreakpointObserver,
     private loginService:LoginService, private store: Store) {}

  // ngOnInit(): void {
  //     this.store.select(selectUsuario)
  //     .subscribe(sesionUsuario=>{        
  //               this.usuario=sesionUsuario.usuarioEnSesion;
  //               this.nombreUsuario = this.usuario.nombre;
  //               this.perfilUsuario = this.usuario.perfil;
  //     })
  // }
  ngOnInit(): void {
    this.store.select(selectUsuario)
    .subscribe(sesionUsuario=>{        
              this.usuario=sesionUsuario.usuarioEnSesion;
              this.nombreUsuario = this.usuario.nombre;
              this.perfilUsuario = this.usuario.perfil;
    })
  }

  cerrarSesion()
  {
    this.loginService.cerrarSesion()
    //this.router.navigate(['login']).then((r) => false);
  }

}
