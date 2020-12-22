import axios from 'axios'

// YouTube Data API
axios.defaults.baseURL = 'https://youtube.googleapis.com/youtube/v3'

/**
 * @name searchVideo
 * @param {String} keyword
 * @param {String|undefined} pageToken
 * @description 利用YouTube Data API，搜尋YouTube影片
 */
export const searchVideo = (keyword, pageToken = undefined) => {
  return axios({
    url: '/search',
    params: {
      part: 'snippet',
      maxResults: 50,
      type: 'video',
      key: process.env.REACT_APP_KEY,
      q: keyword,
      pageToken,
    },
  })
}
