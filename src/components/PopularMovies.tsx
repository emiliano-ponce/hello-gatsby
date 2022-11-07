import React from 'react'
import { Box } from 'grommet'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useStaticQuery, graphql } from 'gatsby'

import MovieCard from './MovieCard'
import { Movie } from '../lib/types'

const PopularMovies = () => {
    const data = useStaticQuery(graphql`
        query {
            allTmdbMoviePopular {
                totalCount
                edges {
                    node {
                        tmdbId
                        title
                        vote_average
                        overview
                        release_date
                        poster_path {
                            source
                        }
                    }
                }
            }
        }
    `)

    const movies = dataToMovies(data.allTmdbMoviePopular.edges)

    const settings = {
        slidesToShow: 6,
        slidesToScroll: 3,
        speed: 500,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <Box pad={{ horizontal: 'medium' }}>
            <Slider {...settings}>
                {movies?.map((m) => (
                    <Box pad="small">
                        <MovieCard movie={m} />
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

const dataToMovies = (data: any[]): Movie[] => {
    return data.map(
        ({
            node: {
                overview,
                poster_path: { source },
                title,
                tmdbId,
                vote_average,
                release_date,
            },
        }) => ({
            id: tmdbId,
            title,
            overview,
            release_date,
            vote_average,
            poster_path: source,
        })
    )
}

export default PopularMovies
