import React from 'react'
import { Box, Heading } from 'grommet'
import { HeadFC } from 'gatsby'

import '../style/App.css'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import PinnedMovies from '../components/PinnedMovies'
import PopularMovies from '../components/PopularMovies'
import HomeSearch from '../components/search/HomeSearch'

const Index = () => {
    return (
        <Layout>
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
        </Layout>
    )
}

export const Head: HeadFC = () => <Seo pageTitle="Home" />

export default Index
