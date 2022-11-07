import React, { createContext, useEffect, ReactNode } from 'react'

import { Movie } from '../lib/types'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface PinnedMovieContextProps {
    movies: Movie[]
    pinMovie: (movie: Movie) => void
    unpinMovie: (movie: Movie) => void
    clearMovies: () => void
}

const PinnedMovieContext = createContext<PinnedMovieContextProps>({
    movies: [],
    pinMovie: (id) => {},
    unpinMovie: (id) => {},
    clearMovies: () => {},
})

const PinnedMovieProvider = ({ children }: { children: ReactNode }) => {
    const [movies, setMovies, clearMovies] = useLocalStorage<Movie[]>('movies')

    useEffect(() => {
        if (!movies) setMovies([])
    }, [movies])

    const pinMovie = (movie: Movie) => {
        setMovies([...movies, movie])
    }

    const unpinMovie = (movie: Movie) => {
        setMovies(movies.filter(({ id }) => movie.id !== id))
    }

    return (
        <PinnedMovieContext.Provider
            value={{ movies, pinMovie, unpinMovie, clearMovies }}
        >
            {children}
        </PinnedMovieContext.Provider>
    )
}

export { PinnedMovieContext, PinnedMovieProvider }
