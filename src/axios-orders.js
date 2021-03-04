import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-my-burger-brull.firebaseio.com/'
});


export default axiosInstance;