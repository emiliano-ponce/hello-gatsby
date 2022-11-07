import React, { useContext } from 'react'

import MovieGrid from './MovieGrid'
import { PinnedMovieContext } from '../context/PinnedMovieContext'
import { Box, BoxExtendedProps } from 'grommet'
import useIsMobile from '../hooks/useIsMobile'

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
