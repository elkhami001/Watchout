import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';
import { filmsRecuder } from './films/films.reducer';


export const rootReducer: ActionReducerMap<IAppState> = {
  films: filmsRecuder
};