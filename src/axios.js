import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chopup-2f24c.firebaseio.com/'
})

export default instance;