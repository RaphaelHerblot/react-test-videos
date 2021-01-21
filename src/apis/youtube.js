import axios from 'axios';

const KEY = 'AIzaSyDFLHAQ0JnftLF3mDTM4gUbAvrzsdu9mEw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});