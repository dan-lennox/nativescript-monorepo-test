import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'seed-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  // The id of the video.
  @Input() public id: string;

  constructor() { }

  ngOnInit() {
    console.log('initialised web');
  }
}
