import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';
import { videosReducer } from './video/video.reducer';



export const rootReducer: ActionReducerMap<IAppState> = {
  videos: videosReducer
};