import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-99d56.firebaseio.com/'
});

export default instance;