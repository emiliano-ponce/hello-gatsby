import React, { ChangeEvent, useEffect, useState } from 'react'
import { HeadFC } from 'gatsby'
import { useDebouncedCallback } from 'use-debounce'
import { Box, Layer, Spinner, Text } from 'grommet'

import Seo from '../components/Seo'
import { Movie } from '../lib/types'
import Layout from '../components/Layout'
import { searchMovies } from '../lib/services'
import MovieGrid from '../components/MovieGrid'
import SearchInput from '../components/search/SerarchInput'

const isBrowser = typeof location !== 'undefined'

const Search = () => {
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState<Movie[]>([])

    const getQuery = () => {
        if (isBrowser) {
            const params = new URLSearchParams(location.search)
            return params.get('q') ?? ''
        } else return ''
    }

    const debounced = useDebouncedCallback(
        (e: ChangeEvent<HTMLInputElement>) => doSearch(e.target.value),
        500
    )

    useEffect(() => {
        doSearch(getQuery())
    }, [])

    const doSearch = async (query: string) => {
        try {
            setLoading(true)
            setMovies(await searchMovies(query))
        } catch (e) {
            // do something with error
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout>
            <Box flex>
                {/** location not available in SSR,
                 * checking if we are in a browser
                 */}
                <SearchInput
                    style={{ marginBottom: 16 }}
                    onChange={debounced}
                    defaultValue={getQuery()}
                />
                {loading && (
                    <Layer background="transparent" responsive={false}>
                        <Box direction="row" align="center" margin="auto">
                            <Spinner
                                border={[
                                    {
                                        side: 'all',
                                        color: '#FFF',
                                        size: 'medium',
                                        style: 'dotted',
                                    },
                                ]}
                            />
                            <Text margin="small">Finding movies...</Text>
                        </Box>
                    </Layer>
                )}
                <MovieGrid
                    movies={movies}
                    emptyMessage="No movies found. Try a new search term!"
                />
            </Box>
        </Layout>
    )
}

export const Head: HeadFC = () => <Seo pageTitle="Search Results" />

export default Search
