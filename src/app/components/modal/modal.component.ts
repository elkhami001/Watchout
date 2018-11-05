import { Component, OnInit, Input  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from 'src/app/models/video';
import { VideosService } from 'src/app/services/video.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  videos: Video[];
  video = new Video();

  mayo = 'WAAROM KAN IK DIT NIET BINDEN!!!';

  constructor(
    public activeModal: NgbActiveModal,
    private videosService: VideosService
  ) { }

  ngOnInit() {
    this.getAllVideos();
  }

  postVideo(title: string, description: string, youtubeId: string){
    let video = new Video();
    video.title = title;
    video.description = description;
    video.youtubeId = youtubeId;
    this.videosService.addVideo(video);
    location.reload();
  }
  editVideo(title: string, description: string, youtubeId: string, id: number){
    let video = new Video();
    video.title = title;
    video.description = description;
    video.youtubeId = youtubeId;
    video.id = id;
    console.log(title + description + youtubeId + id);
    this.videosService.editVideo(video);
    location.reload();
  }

  getAllVideos(){
    this.videosService.getAll()
    .subscribe(videos => this.videos = videos);
  }
}
