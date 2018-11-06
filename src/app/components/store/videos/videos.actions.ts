import { Action } from '@ngrx/store';
import { Video } from 'src/app/models/video';
import { VideosService } from 'src/app/services/video.service';

export enum VideosActionTypes {
  GETALL = '[Video] GetAll',
  ADD = '[Video] Add',
  REMOVE = '[Video] Remove'
}

export class GetAll implements Action {
  public readonly type = VideosActionTypes.GETALL;

  constructor(public readonly videos: Video[]) { }
}

export class Add implements Action {
  public readonly type = VideosActionTypes.ADD;
  constructor(public readonly videos: Video[]) { }
}

export class Remove implements Action {
  public readonly type = VideosActionTypes.REMOVE;
  constructor(public readonly videoId: number) { }
}

export type VideosActionsUnion = Add | GetAll | Remove;
// export type VideosActionsUnion = Add | Remove;
