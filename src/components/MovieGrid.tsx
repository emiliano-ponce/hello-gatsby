import React, { FC } from 'react'
import { Box, Grid, Text } from 'grommet'

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
        <Box style={{ display: 'grid' }}>
            <Grid
                gap="medium"
                style={{ overflow: 'hidden' }}
                columns={isMobile ? '100%' : 'medium'}
            >
                {movies?.length ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <Text>{emptyMessage}</Text>
                )}
            </Grid>
        </Box>
    )
}

export default MovieGrid
