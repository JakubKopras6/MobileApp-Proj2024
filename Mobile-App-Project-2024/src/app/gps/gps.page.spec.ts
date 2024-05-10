import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GPSPage } from './gps.page';

describe('GPSPage', () => {
  let component: GPSPage;
  let fixture: ComponentFixture<GPSPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
