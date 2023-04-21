import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Videos from './pages/Videos';
import Channel from './pages/Channel';
import NotFound from './pages/NotFound';
import VideoDetail from './pages/VideoDetail';
import Search from './pages/Search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: 'videos', element: <Videos /> },
      { path: 'videos/:keyword', element: <Videos /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
      { path: 'results/:query', element: <Search /> },
      {
        path: 'channel/:channelId',
        element: <Channel />,
      },
    ],
  },
]);
