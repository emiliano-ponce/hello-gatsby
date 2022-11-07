import { Movie } from './types'

// WARNING: Don't check your actual API key into GitHub
const MOVIE_DB_API_KEY = process.env.GATSBY_API_KEY
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3'

type Query = {
    [param: string]: string | number
}

const createMovieDbUrl = (relativeUrl: string, queryParams?: Query) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US&include_adult=false`
    if (queryParams) {
        Object.keys(queryParams).forEach(
            (paramName) =>
                (baseUrl += `&${paramName}=${queryParams[paramName]}`)
        )
    }
    return baseUrl
}

export const searchMovies = async (
    query: string,
    page: number = 1
): Promise<Movie[]> => {
    const fullUrl = createMovieDbUrl('/search/movie', {
        page,
        query,
    })
    const res = await fetch(fullUrl)
    const { results } = await res.json()
    const movies = makeMovies(results)
    return movies
}

type MovieResult = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    vote_average: number
    vote_count: number
}

const makeMovies = (results: MovieResult[]): Movie[] =>
    results?.map(
        ({
            adult,
            backdrop_path,
            genre_ids,
            original_language,
            original_title,
            popularity,
            vote_count,
            ...rest
        }) => ({ ...rest })
    )

export const getMovieDetails = async (movieId: number) => {
    const fullUrl = createMovieDbUrl(`/movie/${movieId}`)
    return fetch(fullUrl)
}
