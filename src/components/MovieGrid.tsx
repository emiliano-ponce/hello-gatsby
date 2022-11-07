import React, { FC } from 'react'
import { Grid, Text } from 'grommet'

import MovieCard from './MovieCard'
import { Movie } from '../lib/types'
import useIsMobile from '../hooks/useIsMobile'

interface MovieGridProps {
    movies: Movie[]
    emptyMessage?: string
}
const MovieGrid: FC<MovieGridProps> = ({
    movies,
    emptyMessage = 'No movies found.',
}) => {
    const isMobile = useIsMobile()

    return (
        <Grid columns={isMobile ? '100%' : 'medium'} gap="medium">
            {movies?.length ? (
                movies.map((movie) => <MovieCard movie={movie} />)
            ) : (
                <Text>{emptyMessage}</Text>
            )}
        </Grid>
    )
}

export default MovieGrid
