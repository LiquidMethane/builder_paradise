import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuildsComponent } from './user-builds.component';

describe('UserBuildsComponent', () => {
  let component: UserBuildsComponent;
  let fixture: ComponentFixture<UserBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
