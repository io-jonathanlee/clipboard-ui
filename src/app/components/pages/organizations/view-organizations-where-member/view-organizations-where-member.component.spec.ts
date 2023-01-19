import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganizationsWhereMemberComponent } from './view-organizations-where-member.component';

describe('ViewOrganizationsWhereMemberComponent', () => {
  let component: ViewOrganizationsWhereMemberComponent;
  let fixture: ComponentFixture<ViewOrganizationsWhereMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrganizationsWhereMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrganizationsWhereMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
