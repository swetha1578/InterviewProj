import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchQuestionsComponent } from './fetch-questions.component';

describe('FetchQuestionsComponent', () => {
  let component: FetchQuestionsComponent;
  let fixture: ComponentFixture<FetchQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
