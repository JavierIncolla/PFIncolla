import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducerUsuario from './usuario.reducer';

export const selectUsuarioState = createFeatureSelector<reducerUsuario.State>(
  reducerUsuario.sesionUsuarioFeatureKey
);

export const selectUsuario = createSelector(
  selectUsuarioState,
  (state: reducerUsuario.State) => {
    return state;
  }
);