import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesaurusComponent } from './thesaurus.component';

describe('ThesaurusComponent', () => {
  let component: ThesaurusComponent;
  let fixture: ComponentFixture<ThesaurusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThesaurusComponent]
    });
    fixture = TestBed.createComponent(ThesaurusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
