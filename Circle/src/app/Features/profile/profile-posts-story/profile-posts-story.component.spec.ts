import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostsStoryComponent } from './profile-posts-story.component';

describe('ProfilePostsStoryComponent', () => {
  let component: ProfilePostsStoryComponent;
  let fixture: ComponentFixture<ProfilePostsStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePostsStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePostsStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
