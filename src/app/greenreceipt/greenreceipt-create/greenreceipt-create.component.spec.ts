import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenreceiptCreateComponent } from './greenreceipt-create.component';

describe('GreenreceiptCreateComponent', () => {
  let component: GreenreceiptCreateComponent;
  let fixture: ComponentFixture<GreenreceiptCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenreceiptCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenreceiptCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
