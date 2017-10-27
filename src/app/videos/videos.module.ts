import { NgModule } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './videos.common';
import { VideoComponent } from './video/video.component';

@NgModule({
  imports: [
    ...SHARED_MODULES,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS,
    VideoComponent
  ],
})
export class VideosModule { }
