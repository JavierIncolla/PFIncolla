import { createReducer, on } from '@ngrx/store';
import * as usuarioSesionActions from './usuario.action';
import { iUsuario, Usuario } from '../shared/models/usuario';

export const sesionUsuarioFeatureKey = 'sesionUsuario';

export interface State {
  usuarioEnSesion:iUsuario
}

export const initialState: State = {
  usuarioEnSesion : new Usuario(0,"","",0,"","",1)
};

export const reducer = createReducer(
  initialState,

  on(usuarioSesionActions.CargandoUsuarioSesion, (state, {sesionUsuario}) => {
    // let objeto = estado;
        // objeto.cargando = true;
        // return objeto;
        // Son equivalentes con este codigo
    // let obj= state;
    // return obj;
    //console.log(sesionUsuario)
    return {...state, usuarioEnSesion: sesionUsuario}
  }),
  on(usuarioSesionActions.eliminarUsuarioSesion,(state) => {
    return initialState;
  })
);
