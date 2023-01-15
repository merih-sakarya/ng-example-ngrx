import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NotificationEffect } from '@routes/notification/store/notification.effect';
import { notificationsFeature } from '@routes/notification/store/notification.reducer';

import { AuthenticationService } from '@core/services/authentication.service';
import { NotificationService } from '@shared/services/notification.service';

import { HeaderComponent } from './header/header.component';
import { LayoutDefaultComponent } from './layout-default.component';

describe('LayoutDefaultComponent', () => {
  let component: LayoutDefaultComponent;
  let fixture: ComponentFixture<LayoutDefaultComponent>;
  let authenticationTestingService = jasmine.createSpyObj<AuthenticationService>(['logout']);
  let notificationTestingService = jasmine.createSpyObj<NotificationService>(['list']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutDefaultComponent,
        HeaderComponent
      ],
      imports: [
        RouterTestingModule,
        MatDividerModule,
        MatMenuModule,
        MatIconModule,
        StoreModule.forRoot({ notifications: notificationsFeature.reducer }),
        EffectsModule.forRoot([NotificationEffect])
      ],
      providers: [
        { provide: AuthenticationService, useValue: authenticationTestingService },
        { provide: NotificationService, useValue: notificationTestingService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
