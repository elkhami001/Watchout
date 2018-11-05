import { Action } from '@ngrx/store';

export enum VideosActionTypes {
  ADD = '[Video] Add',
  REMOVE = '[Video] Remove'
}

export class Add implements Action {
  public readonly type = VideosActionTypes.ADD;

  constructor(public readonly video: string) { }
}

export class Remove implements Action {
  public readonly type = VideosActionTypes.REMOVE;
  constructor(public readonly videoId: number) { }
}

export type VideosActionsUnion = Add | Remove;
