import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '@core/module-import-guard';
import { SetupService } from './setup/setup.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffect } from '@routes/auth/store/auth.effect';
import { authFeature } from '@routes/auth/store/auth.reducer';
import { NotificationEffect } from '@routes/notification/store/notification.effect';
import { notificationsFeature } from '@routes/notification/store/notification.reducer';

export function StartupServiceFactory(setupService: SetupService): Function {
  return () => setupService.initialize();
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeature),
    StoreModule.forFeature(notificationsFeature),
    EffectsModule.forFeature([
      AuthEffect,
      NotificationEffect
    ])

  ],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [SetupService],
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
