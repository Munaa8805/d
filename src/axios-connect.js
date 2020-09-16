import axios from 'axios';

const instance = axios.create({
    baseURL: `http://103.119.92.97:3050`
});

export default instance;