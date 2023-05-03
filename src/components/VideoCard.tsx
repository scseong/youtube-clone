import React from 'react';
import styles from './VideoCard.module.css';
import { IItems } from '../typings/db';
import { FormatAgo } from './FormatAgo';

interface IVideo {
  video: IItems;
}

export default function VideoCard({ video }: IVideo) {
  const { title, channelTitle, publishedAt, channelId, thumbnails } =
    video.snippet;
  return (
    <li>
      <div className="thumbnail">
        <img src={thumbnails.medium.url} alt={title} />
      </div>
      <div className="videoInfo">
        <h3>{title}</h3>
        <p>{channelTitle}</p>
        <FormatAgo date={publishedAt} />
      </div>
    </li>
  );
}
