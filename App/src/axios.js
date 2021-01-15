import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://win.e2way.ru/api'
});

export default instance