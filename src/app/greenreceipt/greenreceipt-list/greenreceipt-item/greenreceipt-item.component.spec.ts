import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenreceiptItemComponent } from './greenreceipt-item.component';

describe('GreenreceiptItemComponent', () => {
  let component: GreenreceiptItemComponent;
  let fixture: ComponentFixture<GreenreceiptItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenreceiptItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenreceiptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
