import axios from 'axios';

//Base URl:https://api.themoviedb.org/3/ 
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=b0a0c8bfa3379431090ea52c3bb2110e 
//npm install axios

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
    //params: {
       // api_key: 'b0a0c8bfa3379431090ea52c3bb2110e'
    //}
})

export default api;







