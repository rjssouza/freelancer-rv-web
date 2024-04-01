import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenreceiptComponent } from './greenreceipt.component';

describe('GreenreceiptComponent', () => {
  let component: GreenreceiptComponent;
  let fixture: ComponentFixture<GreenreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenreceiptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
