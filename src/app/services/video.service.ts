import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../models/video';
import { Store } from '@ngrx/store';
import { VideosActionTypes } from '../components/store/videos/videos.actions';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private localApiUrl = 'http://localhost:8080/api/video/';

  constructor(
    private http: HttpClient,
    private store: Store<any>) { }

    getAll() {
      console.log('fetching videos...')
      return this.http.get<Video[]>(this.localApiUrl);
    }

    getAllR() {
      console.log('fetching videos...')
      this.http.get(this.localApiUrl)
      .subscribe(videos => {
        this.store.dispatch({
          type: VideosActionTypes.GETALL,
          payload: videos
        })
      });
    }

  getVideo(id: number) {
    console.log('fetching video('+ id + ')...')
    return this.http.get<Video>(this.localApiUrl + id + '/')
  }

  addVideo(video: Video){
    console.log('adding video..')
    console.log(video);
    this.http.post(this.localApiUrl, video).subscribe((data) => {});
  }

  addVideoR(video: Video){
    console.log('adding video..')
    console.log(video);
    this.http.post(this.localApiUrl, video).subscribe((data) => {
      this.store.dispatch({
        type:VideosActionTypes.ADD,
        payload: video
      })
    });
  }

  editVideo(video: Video){
    console.log('adding editted video..')
    console.log(video);
    this.http.post(this.localApiUrl, video).subscribe((data) => {
      this.store.dispatch({
        type:VideosActionTypes.ADD,
        payload: video
      })
    });
  }

  deleteVideo(id: number) {
    console.log(this.localApiUrl + id + '/');
    this.http.delete(this.localApiUrl + id + '/').subscribe((data) => {});
  }

  deleteVideoR(id: number) {
    console.log(this.localApiUrl + id + '/');
    let url = this.localApiUrl + id + '/';
    this.http.delete(this.localApiUrl + id + '/').subscribe((data) => {});

    // this.http.delete(url).subscribe((data) => {
    //   this.store.dispatch({
    //     type:VideosActionTypes.ADD,
    //     payload: video
    //   })
    // });
  }

}

