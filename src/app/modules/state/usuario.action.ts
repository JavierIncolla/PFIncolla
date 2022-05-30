import { createAction, props } from '@ngrx/store';
import { iUsuario } from '../shared/models/usuario';

export const CargandoUsuarioSesion = createAction(
  '[Usuario en Sesion] Cargar Sesion del Usuario',
  props<{ sesionUsuario: iUsuario }>()
);

export const eliminarUsuarioSesion = createAction(
  '[Eliminar Usuario en Sesion] Quitar Usuario en sesion',
);