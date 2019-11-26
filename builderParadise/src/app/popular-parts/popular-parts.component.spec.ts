import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPartsComponent } from './popular-parts.component';

describe('PopularPartsComponent', () => {
  let component: PopularPartsComponent;
  let fixture: ComponentFixture<PopularPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
