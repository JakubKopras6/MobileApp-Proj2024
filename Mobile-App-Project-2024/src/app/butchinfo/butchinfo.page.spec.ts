import { ComponentFixture, TestBed } from '@angular/core/testing';
import { butchinfoPage } from './butchinfo.page';

describe('butchinfoPage', () => {
  let component: butchinfoPage;
  let fixture: ComponentFixture<butchinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(butchinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
