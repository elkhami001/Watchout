import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video';
import { VideosService } from 'src/app/services/video.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/app-state.interface';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  // @Input()
  // public videos: Video[];
  public videos$: Observable<Video[]>;
  
  // videos: Video[];

  youtubeImgUrl = 'https://img.youtube.com/vi/w8HdOHrc3OQ/maxresdefault.jpg';
  constructor(
    private videosService: VideosService,
    private readonly store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.getAllVideosR();
    this.videos$ = this.store.pipe(select(s => s.videos));
  }

  getYoutubeUrl(id: string) {
    const youtubEmbedUrl = 'https://www.youtube.com/embed/';
    return youtubEmbedUrl + id;
  }
  getYoutubeImg(id: string) {
    const youtubeImgdUrl = 'https://img.youtube.com/vi/';
    return youtubeImgdUrl + id + '/0.jpg';
  }

  getAllVideos() {
    this.videosService.getAll()
    .subscribe(videos => this.videos = videos);
  }

  getAllVideosR() {
    this.videosService.getAllR();
  }
}
