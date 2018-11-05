import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { VideosService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos: Video[] = [];

  youtubeImgUrl = 'https://img.youtube.com/vi/w8HdOHrc3OQ/maxresdefault.jpg';
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.getAllVideos();
  }

  getYoutubeUrl(id: string){
    const youtubEmbedUrl = 'https://www.youtube.com/embed/';
    return  youtubEmbedUrl + id;
  }
  getYoutubeImg(id: string){
    const youtubeImgdUrl = 'https://img.youtube.com/vi/';
    return  youtubeImgdUrl + id + '/0.jpg';
  }

  getAllVideos(){
    this.videosService.getAll()
    .subscribe(videos => this.videos = videos);
  }
}
