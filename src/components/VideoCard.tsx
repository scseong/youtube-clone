import React, { useState } from 'react';
import styles from './VideoCard.module.css';
import { IItems } from '../typings/db';
import { FormatAgo } from '../utils/date';
import { Link, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';

interface IVideo {
  video: IItems;
}

export default function VideoCard({ video }: IVideo) {
  const { id } = video;
  const { title, channelTitle, publishedAt, channelId, thumbnails } =
    video.snippet;
  const navigate = useNavigate();
  const handleClick = () =>
    navigate(`videos/watch/${id}`, { state: { video } });

  return (
    <li className={styles.videoItem} onClick={handleClick}>
      <div className={styles.thumbnail}>
        <img src={thumbnails.medium.url} alt={title} />
        <div className={styles.player}>
          <Link to={`videos/watch/${id}`} state={video}>
            <YouTube videoId={id} opts={{ width: '320', height: '180' }} />
          </Link>
        </div>
      </div>
      <div className={styles.videoInfo}>
        <h2 title={title}>{title}</h2>
        <div className={styles.videoMeta}>
          <p title={channelTitle}>
            <Link
              to={`channel/@${channelId}`}
              onClick={(e) => e.stopPropagation()}
            >
              {channelTitle}
            </Link>
          </p>
          <p>{FormatAgo(publishedAt)}</p>
        </div>
      </div>
    </li>
  );
}
