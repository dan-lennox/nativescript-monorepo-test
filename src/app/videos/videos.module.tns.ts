import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './videos.common';
import { NSVideoComponent } from './nsVideo/nsVideo.component';

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS,
    NSVideoComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class VideosModule { }
