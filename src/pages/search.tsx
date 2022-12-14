import React, { ChangeEvent, useEffect, useState, useRef } from 'react'
import { HeadFC } from 'gatsby'
import type { PageProps } from 'gatsby'
import { useDebouncedCallback } from 'use-debounce'
import { Box, Layer, Spinner, Text } from 'grommet'

import Seo from '../components/Seo'
import { Movie } from '../lib/types'
import { searchMovies } from '../lib/services'
import MovieGrid from '../components/MovieGrid'
import SearchInput from '../components/search/SerarchInput'

const Search = ({ location }: PageProps) => {
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState<Movie[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    const params = new URLSearchParams(location.search)
    const query = params.get('q') ?? ''

    const debounced = useDebouncedCallback(
        (e: ChangeEvent<HTMLInputElement>) => doSearch(e.target.value),
        300
    )

    useEffect(() => {
        doSearch(query)
    }, [])

    const doSearch = async (query: string) => {
        try {
            setLoading(true)
            setMovies(await searchMovies(query))
            inputRef?.current?.focus()
        } catch (e) {
            // TODO: handle error
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box flex>
            {/** location not available in SSR,
             * checking if we are in a browser
             */}
            <SearchInput
                ref={inputRef}
                onChange={debounced}
                defaultValue={query}
                style={{ marginBottom: 16 }}
            />
            {loading && (
                <Layer background="transparent" responsive={false} modal={false}>
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
    )
}

export const Head: HeadFC = () => <Seo pageTitle="Search Results" />

export default Search
