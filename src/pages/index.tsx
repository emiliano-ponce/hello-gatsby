import React from 'react'
import { HeadFC } from 'gatsby'
import { Box, Heading } from 'grommet'

import '../style/App.css'
import Seo from '../components/Seo'
import PinnedMovies from '../components/PinnedMovies'
import PopularMovies from '../components/PopularMovies'
import HomeSearch from '../components/search/HomeSearch'

const Index = () => {
    return (
        <>
            <Box as="section">
                <HomeSearch />
            </Box>
            <Box as="section">
                <Heading margin={{ vertical: 'small' }} level="3">
                    Popular Movies
                </Heading>
                <PopularMovies />
            </Box>
            <Box as="section">
                <Heading margin={{ vertical: 'small' }} level="3">
                    Pinned Movies
                </Heading>
                <PinnedMovies />
            </Box>
        </>
    )
}

export const Head: HeadFC = () => <Seo pageTitle="Home" />

export default Index
