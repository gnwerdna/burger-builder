import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://my-burger-project-c7a98.firebaseio.com/'
});

export default instance;