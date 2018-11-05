import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private localApiUrl = 'http://localhost:8080/api/video/';

  constructor(private http: HttpClient) { }

  getAll() {
    console.log('fetching videos...')
    return this.http.get<Video[]>(this.localApiUrl);
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
  editVideo(video: Video){
    console.log('adding editted video..')
    console.log(video);
    this.http.post(this.localApiUrl, video).subscribe((data) => {});
  }

  deleteVideo(id: number) {
    console.log(this.localApiUrl + id + '/');
    this.http.delete(this.localApiUrl + id + '/').subscribe((data) => {});
  }

}
