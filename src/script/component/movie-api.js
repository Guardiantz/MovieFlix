import axios from "axios";

const apiKey = process.env.MOVIE_API_KEY;
const baseurl = process.env.BASEURL;

export const getMovieList = async() =>{
    const movie = await axios.get(`${baseurl}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}

export const getsearchMovie  = async(q) => {
    const search = await axios.get(q)
    return
}