import axios from 'axios';


export default axios.create({
    params: {
        key: 'f9684ad2cf0b4d528274bf7bc9760a49'
    },
    baseURL: 'https://api.rawg.io/api',
})
