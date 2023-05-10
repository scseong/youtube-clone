export interface IItems {
  // kind: string;
  // etag: string;
  // items: {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: IThumbnail;
      medium: IThumbnail;
      high: IThumbnail;
      standard: IThumbnail;
      maxres: IThumbnail;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      description: string;
      title: string;
    };
    defaultAudioLanguage: string;
  };
  // };
  // nextPageToken: string;
  // pageInfo: string;
}

interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
