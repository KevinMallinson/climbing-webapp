import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BetasPage } from './betas.page';

describe('BetasPage', () => {
  let component: BetasPage;
  let fixture: ComponentFixture<BetasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
