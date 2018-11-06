import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from 'src/app/models/video';
import { VideosService } from 'src/app/services/video.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/app-state.interface';
import { Observable } from 'rxjs';
import * as fromVideos from '../store/videos/videos.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public videos$: Observable<Video[]>;
  videos: Video[];
  // video = new Video();

  mayo = 'WAAROM KAN IK DIT NIET BINDEN!!!';

  constructor(
    public activeModal: NgbActiveModal,
    private videosService: VideosService,
    private readonly store: Store<IAppState>
  ) { }

  ngOnInit() {
    // this.videosService.getAll();
    // this.videos =
    //   this.store.select('films');
    // this.videos$ = this.store.pipe(select(s => s.videos));
    // public videos$: Observable<Video[]>;
    // this.getAllVideos();
  }

  public addVideo(title: string, description: string, youtubeId: string): void {
    let video = new Video({ title: title, description: description, youtubeId: youtubeId })
    // this.store.dispatch(new fromVideos.Add(video));
  }

  postVideo(title: string, description: string, youtubeId: string){
    let video = new Video();
    video.title = title;
    video.description = description;
    video.youtubeId = youtubeId;
    this.videosService.addVideoR(video);
    // location.reload();
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

  // getAllVideos(){
  //   this.videosService.getAll()
  //   .subscribe(videos => this.videos = videos);
  // }
}
