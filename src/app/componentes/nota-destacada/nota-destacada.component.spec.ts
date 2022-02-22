import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaDestacadaComponent } from './nota-destacada.component';

describe('NotaDestacadaComponent', () => {
  let component: NotaDestacadaComponent;
  let fixture: ComponentFixture<NotaDestacadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaDestacadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaDestacadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
