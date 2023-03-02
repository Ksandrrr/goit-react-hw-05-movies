import axios from "axios";
const KEY = "1c91a24341f096a044c8c534ec1c5275"

export const fetchPopular = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}`)
    return response.data.results
}

export const fetchMovieID = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
    return response.data
}
export const fetchSearchMovies = async (search) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${search}`)
    return response.data
}
export const fetchCast = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`)
    return response.data
}
export const fetchReviews = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`)
    return response.data
}