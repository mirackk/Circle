export interface newsItem {
    _id: string;
    publisherName: string;
    content: {
      image?: string;
      video?: string;
      text: string;
      _id: string;
    };
    publishedTime: string;
    comment: Array<{
      content: {
        text: string;
        _id: string;
      },
      _id: string,
      publishedTime: string,
      publisherName?: string
    }>;
    likedIdList: Array<{
      userId: string;
      _id: string;
    }>;
    __v: number;
  }