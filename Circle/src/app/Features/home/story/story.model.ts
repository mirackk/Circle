export interface newsItem {
  _id: string;
  publisherName: string;
  publishedTime: string;
  content: {
    image?: string;
    video?: string;
    text: string;
    _id: string;
  };
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


export interface postData {
  publisherName: string;
      publishedTime: string;
      content: {
          image: string,
          video: string,
          text: string,
      };
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
}

export interface commentData {
  publisherName: string;
      content: {
          image: string,
          video: string,
          text: string,
      };
}
