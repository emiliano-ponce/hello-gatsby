import React from 'react'
import styled from 'styled-components'
import { Heading, Box } from 'grommet'
import { Video as VideoIcon } from 'grommet-icons'

import useIsMobile from '../hooks/useIsMobile'
import filmReel from '../images/film-reel.jpg'
import useSiteMetadata from '../hooks/useSiteMeta'

const HeroImageWrapper = styled(Box)`
    background-image: linear-gradient(0deg, #141414, transparent 70%),
        url(${filmReel});
    height: 25vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

const HeroImageText = styled(Heading)`
    color: #fff;
    margin: auto;
    display: flex;
    align-items: flex-end;
    & svg {
        margin-left: 8px;
    }
`

const HeroImage = () => {
    const { title } = useSiteMetadata()
    const isMobile = useIsMobile()
    return (
        <HeroImageWrapper flex direction="row" align="center">
            <HeroImageText margin={{ right: 'small' }}>
                {title}
                <VideoIcon color="#FFF" size="large" />
            </HeroImageText>
        </HeroImageWrapper>
    )
}

export default HeroImage