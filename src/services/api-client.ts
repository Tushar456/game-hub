import axios from 'axios';


export default axios.create({
    params: {
        key: '<api_key>'
    },
    baseURL: 'https://api.rawg.io/api',
})
