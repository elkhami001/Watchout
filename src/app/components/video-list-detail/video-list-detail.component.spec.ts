import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListDetailComponent } from './video-list-detail.component';

describe('VideoListDetailComponent', () => {
  let component: VideoListDetailComponent;
  let fixture: ComponentFixture<VideoListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
