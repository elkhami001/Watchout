import { FilmsActionsUnion, FilmsActionTypes } from './films.actions';
import { Film } from 'src/app/models/film';

const initialState = [
  new Film(1, 'Avatar', 'A Spielberg Movie', 'sKAS22=A1', 10)
];

export const filmsRecuder = (state = initialState, action: FilmsActionsUnion) => {
  switch (action.type) {
    case FilmsActionTypes.ADD:
      const newId = Math.max(...state.map(film => film.id)) + 1;
      return [
        ...state,
        new Film(newId, 'test', 'test', 'test', 1)
      ];
    case FilmsActionTypes.REMOVE:
      return state.filter(film => film.id !== action.filmId);
    default:
      return state;
  }
};
