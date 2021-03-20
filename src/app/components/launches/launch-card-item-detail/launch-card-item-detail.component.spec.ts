import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCardItemDetailComponent } from './launch-card-item-detail.component';

describe('LaunchCardItemDetailComponent', () => {
  let component: LaunchCardItemDetailComponent;
  let fixture: ComponentFixture<LaunchCardItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchCardItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCardItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
