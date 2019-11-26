import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPartsComponent } from './fav-parts.component';

describe('FavPartsComponent', () => {
  let component: FavPartsComponent;
  let fixture: ComponentFixture<FavPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
