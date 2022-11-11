import React, { useContext } from 'react'
import { Box, BoxExtendedProps } from 'grommet'

import MovieGrid from './MovieGrid'
import useIsMobile from '../hooks/useIsMobile'
import { PinnedMovieContext } from '../context/PinnedMovieContext'

const PinnedMovies = () => {
    const { movies } = useContext(PinnedMovieContext)
    const isMobile = useIsMobile()

    const boxProps: BoxExtendedProps = isMobile
        ? { border: 'top' }
        : { border: 'all', round: 'small' }

    return (
        <Box pad="small" {...boxProps}>
            <MovieGrid
                movies={movies}
                emptyMessage="Pin some movies to see them here!"
            />
        </Box>
    )
}

export default PinnedMovies
