import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLazyLoadComponent } from './image-lazy-load.component';

describe('ImageLazyLoadComponent', () => {
  let component: ImageLazyLoadComponent;
  let fixture: ComponentFixture<ImageLazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
