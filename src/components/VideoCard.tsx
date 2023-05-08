import React from 'react';
import styles from './VideoCard.module.css';
import { IItems } from '../typings/db';
import { FormatAgo } from '../utils/date';

interface IVideo {
  video: IItems;
}

export default function VideoCard({ video }: IVideo) {
  const { title, channelTitle, publishedAt, channelId, thumbnails } =
    video.snippet;
  return (
    <li className={styles.videoItem}>
      <div className={styles.thumbnail}>
        <img src={thumbnails.medium.url} alt={title} />
      </div>
      <div className={styles.videoInfo}>
        <h2 title={title}>{title}</h2>
        <div className={styles.videoDesc}>
          <p title={channelTitle}>{channelTitle}</p>
          <p>{FormatAgo(publishedAt)}</p>
        </div>
      </div>
    </li>
  );
}
