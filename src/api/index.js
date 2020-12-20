import axios from 'axios'

// YouTube Data API
axios.defaults.baseURL = 'https://youtube.googleapis.com/youtube/v3'

export const searchVideo = keyword => {
  return axios({
    url: '/search',
    params: {
      part: 'snippet',
      maxResults: 1,
      type: 'video',
      eventType: 'completed',
      q: encodeURIComponent(keyword), // URL-escaped when sent request
      key: process.env.REACT_APP_KEY,
    },
  })
}
