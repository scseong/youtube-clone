import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/videos';

export const fetchPopularVideos = async () => {
  const response = await axios.get(
    `${BASE_URL}?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  );
  return response.data.items;
};
