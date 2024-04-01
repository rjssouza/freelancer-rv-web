import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenreceiptListComponent } from './greenreceipt-list.component';

describe('GreenreceiptListComponent', () => {
  let component: GreenreceiptListComponent;
  let fixture: ComponentFixture<GreenreceiptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenreceiptListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenreceiptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
