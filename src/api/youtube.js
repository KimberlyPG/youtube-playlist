import axios from "axios";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:
    {
        part:'snippet',
        maxResults:8,
        key: 'AIzaSyD4IEtYHDc08LL9oFXMGLsYoVT_wBrJ8ec'
    }
})