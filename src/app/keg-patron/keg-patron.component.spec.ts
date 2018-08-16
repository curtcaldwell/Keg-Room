import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegPatronComponent } from './keg-patron.component';

describe('KegPatronComponent', () => {
  let component: KegPatronComponent;
  let fixture: ComponentFixture<KegPatronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegPatronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
