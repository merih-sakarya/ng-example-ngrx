import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';
import { NotificationEffect } from '@routes/notification/store/notification.effect';
import { notificationsFeature } from '@routes/notification/store/notification.reducer';

import { NotificationService } from '@shared/services/notification.service';
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notificationTestingService = jasmine.createSpyObj<NotificationService>([
    'list',
    'delete',
    'deleteAll'
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationComponent],
      imports: [
        SharedModule,
        StoreModule.forRoot({ notifications: notificationsFeature.reducer }),
        EffectsModule.forRoot([NotificationEffect])
      ],
      providers: [{ provide: NotificationService, useValue: notificationTestingService }]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
