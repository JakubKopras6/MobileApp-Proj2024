import { ComponentFixture, TestBed } from '@angular/core/testing';
import { excaliburinfoPage } from './excaliburinfo.page';

describe('excaliburinfoPage', () => {
  let component: excaliburinfoPage;
  let fixture: ComponentFixture<excaliburinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(excaliburinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
