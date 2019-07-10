import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFinderComponent } from './player-finder.component';

describe('PlayerFinderComponent', () => {
  let component: PlayerFinderComponent;
  let fixture: ComponentFixture<PlayerFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
