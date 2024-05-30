import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingListComponent } from './programing-list.component';

describe('ProgramingListComponent', () => {
  let component: ProgramingListComponent;
  let fixture: ComponentFixture<ProgramingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramingListComponent]
    });
    fixture = TestBed.createComponent(ProgramingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
