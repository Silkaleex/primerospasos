import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendermoComponent } from './rendermo.component';

describe('RendermoComponent', () => {
  let component: RendermoComponent;
  let fixture: ComponentFixture<RendermoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendermoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
