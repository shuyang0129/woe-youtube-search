import axios from 'axios'

axios.defaults.baseURL = 'https://youtube.googleapis.com/youtube/v3'

export const searchVideo = keyword => {
  return axios({
    url: '/search',
    params: {
      part: keyword,
      maxResults: 1,
      type: 'video',
      key: process.env.REACT_APP_KEY,
    },
  })
}
