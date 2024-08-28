import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientVisitDetailsComponent } from './add-client-visit-details.component';

describe('AddClientVisitDetailsComponent', () => {
  let component: AddClientVisitDetailsComponent;
  let fixture: ComponentFixture<AddClientVisitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClientVisitDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientVisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
