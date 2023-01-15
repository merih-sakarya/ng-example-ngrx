import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { NotificationComponent } from './notification.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationComponent
  }
];

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)]
  // NgRx forFeature function is used to specify a feature module that will be used in a lazy-loaded module. It can be used multiple times in a single application.
  // The main difference between forRoot and forFeature is that forRoot should only be used in the root module, while forFeature can be used in any module.
  // NotificationsFeature & NotificationEffect are already imported in CoreModule (@see CoreModule)
})
export class NotificationModule {}
