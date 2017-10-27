import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
// This is how custom nativescript elements are registered.
registerElement('VideoPlayer', () => require('nativescript-videoplayer').Video);
import { Video } from 'nativescript-videoplayer';


@Component({
  moduleId: module.id,
  selector: 'seed-video',
  templateUrl: './nsVideo.component.html'
})
export class NSVideoComponent implements OnInit {

  // Reference the videoField, currently this needs to be ElementRef due to a
  // known bug with the nativescript-videoplayer plugin
  // https://github.com/bradmartin/nativescript-videoplayer/issues/77
  @ViewChild('videoField') public videoField: ElementRef;

  // The id of the video.
  @Input() public id: string;

  constructor() { }

  ngOnInit() {

    console.log('still called');

    // Scrub to 1 millisecond into the video so that we have a preview image.
    this.videoField.nativeElement.seekToTime(1);
  }
}
