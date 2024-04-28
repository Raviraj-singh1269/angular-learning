import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemousersComponent } from './demousers.component';

describe('DemousersComponent', () => {
  let component: DemousersComponent;
  let fixture: ComponentFixture<DemousersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemousersComponent]
    });
    fixture = TestBed.createComponent(DemousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
