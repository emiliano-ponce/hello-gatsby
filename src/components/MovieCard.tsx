import React, { useContext } from 'react'
import { Pin } from 'grommet-icons'
import styled from 'styled-components'
import { Box, Image, Heading, Text, Paragraph } from 'grommet'

import { Movie } from '../lib/types'
import IconButton from './IconButton'
import { PinnedMovieContext } from '../context/PinnedMovieContext'

const basePosterUrl = 'https://image.tmdb.org/t/p/original'

const InfoBox = styled(Box)`
    height: 100%;
    position: relative;
    & .reveal {
        width: 100%;
        height: 100%;
        bottom: 0;
        opacity: 0;
        position: absolute;
        transition: all 0.3s ease;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    }
    &:hover > .reveal {
        opacity: 1;
    }
    & img {
        flex: 0 0 auto;
    }
`

const PinButton = styled(IconButton)`
    position: absolute;
    top: 8px;
    right: 8px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    z-index: 10;
`

const FilledPin = styled(Pin)`
    & path {
        fill: #fff !important;
        stroke: #fff !important;
    }
`

const MovieCard = ({ movie }: { movie: Movie }) => {
    const { movies, pinMovie, unpinMovie } = useContext(PinnedMovieContext)

    const { id, overview, title, poster_path, release_date } =
        movie
    const pinned = movies?.findIndex((m) => m.id === id) > -1

    const handlePinClick = () => {
        pinned ? unpinMovie(movie) : pinMovie(movie)
    }

    return (
        <InfoBox flex>
            <PinButton
                icon={pinned ? <FilledPin /> : <Pin />}
                onClick={handlePinClick}
            />
            <Image
                fit="cover"
                alt={`Movie poster for ${title}`}
                src={`${basePosterUrl}${poster_path}`}
            />
            <Box
                className="reveal"
                pad="small"
                overflow={{ horizontal: 'hidden', vertical: 'auto' }}
            >
                <Box>
                    <Heading level={3}>{title}</Heading>
                    <Text size="small">{release_date}</Text>
                    <Paragraph fill>{overview}</Paragraph>
                </Box>
            </Box>
        </InfoBox>
    )
}

export default MovieCard
