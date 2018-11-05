import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { VideosService } from '../../services/video.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private videosService: VideosService,
    private modalService: NgbModal
    ) { }

    videos: Video[];

  ngOnInit() {
    this.getAllVideos()
  }

  /// -----VIEW FUNCTIONS-----

  editVideo(title: string, description: string, youtubeId: string, id: number){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.type = 'edit';
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.description = description;
    modalRef.componentInstance.youtubeId = youtubeId;
    modalRef.componentInstance.id = id;
  }

  addVideo(){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.type = 'add';
  }

  deleteVideo(id: number){
    console.log('deleting video with id: ' + id)
    this.videosService.deleteVideo(id);
    location.reload();
  }

  /// -----SERVICES-----

  getAllVideos(){
    this.videosService.getAll()
    .subscribe(videos => this.videos = videos);
  }

  getVideo(id: number): any{
    return this.videosService.getVideo(id);
  }
}
