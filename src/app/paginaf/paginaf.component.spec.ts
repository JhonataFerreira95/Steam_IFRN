import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginafComponent } from './paginaf.component';

describe('PaginafComponent', () => {
  let component: PaginafComponent;
  let fixture: ComponentFixture<PaginafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
