// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { VideosRoutes } from './videos.routes';
import { VideosComponent } from './videos/videos.component';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forChild(<any>VideosRoutes),
  TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
  VideosComponent
];
