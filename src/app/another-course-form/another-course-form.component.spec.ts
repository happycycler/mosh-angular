import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherCourseFormComponent } from './another-course-form.component';

describe('AnotherCourseFormComponent', () => {
  let component: AnotherCourseFormComponent;
  let fixture: ComponentFixture<AnotherCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
