import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultdetailsComponent } from './searchresultdetails.component';

describe('SearchresultdetailsComponent', () => {
  let component: SearchresultdetailsComponent;
  let fixture: ComponentFixture<SearchresultdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresultdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
