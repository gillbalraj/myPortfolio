import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTechListComponent } from './my-tech-list.component';

describe('MyTechListComponent', () => {
  let component: MyTechListComponent;
  let fixture: ComponentFixture<MyTechListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTechListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
