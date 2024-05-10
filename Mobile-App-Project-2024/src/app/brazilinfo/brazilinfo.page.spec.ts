import { ComponentFixture, TestBed } from '@angular/core/testing';
import { brazilinfoPage } from './brazilinfo.page';

describe('brazilinfoPage', () => {
  let component: brazilinfoPage;
  let fixture: ComponentFixture<brazilinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(brazilinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
