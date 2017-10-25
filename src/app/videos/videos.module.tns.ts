import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './videos.common';

@NgModule({
  imports: [
    ...SHARED_MODULES,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class VideosModule { }
