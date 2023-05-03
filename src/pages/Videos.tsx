import React from 'react';
import styles from './Videos.module.css';
import FeedFilter from '../components/FeedFilter';
import { useQuery } from '@tanstack/react-query';
import { fetchPopularVideos } from '../api';
import { IItems } from '../typings/db';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<IItems[]>({
    queryKey: ['popular'],
    queryFn: fetchPopularVideos,
  });

  return (
    <main className={styles.main}>
      <div className={styles.mainBox}>
        <FeedFilter />
        <div className={styles.videos}>
          <ul>
            {videos &&
              videos.map((video) => <VideoCard key={video.id} video={video} />)}
          </ul>
        </div>
      </div>
    </main>
  );
}
