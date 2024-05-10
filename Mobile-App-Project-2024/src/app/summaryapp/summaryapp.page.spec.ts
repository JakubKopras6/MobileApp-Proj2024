import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryappPage } from './summaryapp.page';

describe('SummaryappPage', () => {
  let component: SummaryappPage;
  let fixture: ComponentFixture<SummaryappPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SummaryappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
