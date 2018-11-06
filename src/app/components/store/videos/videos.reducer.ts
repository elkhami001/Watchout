import { VideosActionsUnion, VideosActionTypes } from './videos.actions';
import { Video } from 'src/app/models/video';

const initialState = []; 

// const initialState = [
//   new Video({ id: 1, title: 'Avatar', description: 'A Spielberg Movie', youtubeId: 'sKAS22=A1', rating: 10 })
// ]; 

export const videosReducer = (state = initialState, action: VideosActionsUnion) => {
  switch (action.type) {
    case VideosActionTypes.GETALL:
      return action.videos;
    case VideosActionTypes.ADD:
      const newId = Math.max(...state.map(video => video.id)) + 1;
      return [
        ...state,
        new Video({ id: newId, title: 'test', description: 'test', youtubeId: 'test', rating: 1 })
      ];
    case VideosActionTypes.REMOVE:
      return state.filter(video => video.id !== action.videoId);
    default:
      return state;
  }
};
