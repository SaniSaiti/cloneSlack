import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectMesseagesComponent } from './direct-messeages.component';

describe('DirectMesseagesComponent', () => {
  let component: DirectMesseagesComponent;
  let fixture: ComponentFixture<DirectMesseagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectMesseagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectMesseagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
