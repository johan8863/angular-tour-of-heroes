import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoreDetailComponent } from './heore-detail.component';

describe('HeoreDetailComponent', () => {
  let component: HeoreDetailComponent;
  let fixture: ComponentFixture<HeoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeoreDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
