import { Action } from '@ngrx/store';

export enum FilmsActionTypes {
  ADD = '[Film] Add',
  REMOVE = '[Film] Remove'
}

export class Add implements Action {
  public readonly type = FilmsActionTypes.ADD;

  constructor(public readonly film: string) { }
}

export class Remove implements Action {
  public readonly type = FilmsActionTypes.REMOVE;
  constructor(public readonly filmId: number) { }
}

export type FilmsActionsUnion = Add | Remove;
