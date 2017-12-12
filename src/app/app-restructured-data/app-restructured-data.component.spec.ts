import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRestructuredDataComponent } from './app-restructured-data.component';

describe('AppRestructuredDataComponent', () => {
  let component: AppRestructuredDataComponent;
  let fixture: ComponentFixture<AppRestructuredDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRestructuredDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRestructuredDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
