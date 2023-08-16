import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatListingPage } from './cat-listing.page';

describe('CatListingPage', () => {
  let component: CatListingPage;
  let fixture: ComponentFixture<CatListingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
