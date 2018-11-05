import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { VideosService } from 'src/app/services/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-list-detail',
  templateUrl: './video-list-detail.component.html',
  styleUrls: ['./video-list-detail.component.scss']
})
export class VideoListDetailComponent implements OnInit {

  video : Video;
  videoId : number;
  constructor(
    private videosService: VideosService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.videoId = +this.activatedRoute.snapshot.params['episodeId'];
    this.videosService.getVideo(this.videoId)
    .subscribe(video => this.video = video);
  }

  getYoutubeUrl(id: string){
    const youtubEmbedUrl = 'https://www.youtube.com/embed/';
    return  youtubEmbedUrl + id;
  }
}
