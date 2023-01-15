import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)]
  // NgRx forFeature function is used to specify a feature module that will be used in a lazy-loaded module. It can be used multiple times in a single application.
  // The main difference between forRoot and forFeature is that forRoot should only be used in the root module, while forFeature can be used in any module.
  // AuthFeature & AuthEffect are already imported in CoreModule (@see CoreModule)
})
export class RegisterModule {}
