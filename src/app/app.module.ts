import { isDevMode, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from '@core/interceptors';
import { metaReducers } from './store/reducers/meta-reducer';
import { CustomSerializer } from './store/reducers/router-reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    // StoreModule.forRoot is imported once in the root module, accepting a reducer function or object map of reducer functions.
    StoreModule.forRoot({ router: routerReducer }, { metaReducers }),
    // EffectsModule.forRoot() is imported once in the root module and sets up the effects class to be initialized immediately when the application starts.
    EffectsModule.forRoot([]),
    // @ngrx/router-store keeps router state up-to-date in the store.
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    // Store devtools instrument the store retaining past versions of state and recalculating new states. This enables powerful time-travel debugging.
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [...httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
