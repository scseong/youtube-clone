import axios from 'axios';

export const fetchPopularVideos = async () => {
  const response = await axios.get('/popular');
  return response.data.items;
};
