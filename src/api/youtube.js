import axios from "axios";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:
    {
        part:'snippet',
        maxResults:8,
        key: 'AIzaSyD1PMVUkThMRe08BO_VVOX00JJzpAFL9p8',
        origin: 'http://localhost:3000' 
    }
})