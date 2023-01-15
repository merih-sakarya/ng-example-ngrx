import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NotificationEffect } from '@routes/notification/store/notification.effect';
import { notificationsFeature } from '@routes/notification/store/notification.reducer';

import { NotificationService } from '@shared/services/notification.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let notificationTestingService = jasmine.createSpyObj<NotificationService>(['list']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        StoreModule.forRoot({ notifications: notificationsFeature.reducer }),
        EffectsModule.forRoot([NotificationEffect])
      ],
      providers: [{ provide: NotificationService, useValue: notificationTestingService }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
