import axios from "axios";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:
    {
        part:'snippet',
        maxResults:8,
        key: 'AIzaSyDwwnpmkmifgDwTl5Kjlq4emxNzOspnazg',
        origin: 'http://localhost:3000' 
    }
})