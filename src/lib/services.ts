// WARNING: Don't check your actual API key into GitHub
const MOVIE_DB_API_KEY = process.env.API_KEY
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3'

type Query = {
    [param: string]: string | number
}

const createMovieDbUrl = (relativeUrl: string, queryParams?: Query) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
    if (queryParams) {
        Object.keys(queryParams).forEach(
            (paramName) =>
                (baseUrl += `&${paramName}=${queryParams[paramName]}`)
        )
    }
    return baseUrl
}

export const searchMovies = async (page: number, query: string) => {
    const fullUrl = createMovieDbUrl('/search/movie', {
        page,
        query,
    })
    return fetch(fullUrl)
}

export const getMovieDetails = async (movieId: number) => {
    const fullUrl = createMovieDbUrl(`/movie/${movieId}`)
    return fetch(fullUrl)
}
