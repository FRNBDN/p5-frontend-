import axios from 'axios';

axios.defaults.baseURL='https://p5-backend.herokuapp.com/'
axios.defaults.headers.post['Content-Type']='multipart/form-data'
axios.defaults.withCredentials = true;

