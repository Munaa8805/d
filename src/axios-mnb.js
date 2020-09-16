import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://103.119.92.85:5000'
});

export default instance;