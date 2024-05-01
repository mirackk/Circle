// src/app/features/home/story/story.model.ts

export interface Story {
    id: number;
    media: string[]; // 假设这是图片或视频的 URL 数组
    likes: number;
    comments: number;
  }
  