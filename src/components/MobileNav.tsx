import React, { useMemo, useEffect } from 'react'
import { Box, Nav, Text } from 'grommet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { CircleInformation, Home, Search } from 'grommet-icons'
import { normalizeColor } from 'grommet/utils'
import useIsMobile from '../hooks/useIsMobile'

const navHeight = "75px"

const BottomNav = styled(Nav)`
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #000000;
    height: ${navHeight};
    z-index: 100;
`

const Tab = styled(Link)`
    width: 33%;
    display: flex;
    color: #ffffff;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    & .tab-label {
        transition: max-height 1s;
        max-height: 0;
        overflow: hidden;
    }
    &.active {
        & .tab-label {
            max-height: 25px;
            color: ${({ theme }) => normalizeColor('control', theme)};
        }
        & path {
            stroke: ${({ theme }) => normalizeColor('control', theme)};
        }
    }
`

const MobileNav = () => {
    const isMobile = useIsMobile()

    const tabs = useMemo(
        () => [
            { label: 'Search', icon: <Search />, to: '/search' },
            { label: 'Home', icon: <Home />, to: '/' },
            { label: 'About', icon: <CircleInformation />, to: '/about' },
        ],
        []
    )

    if (!isMobile) return null
    return (
        <>
            {/** Shim */}
            <Box height={navHeight} />
            <BottomNav direction="row">
                {tabs.map(({ label, icon, to }) => (
                    <Tab activeClassName="active" to={to}>
                        <Box align='center'>
                            {icon}
                            <Text className='tab-label'>{label}</Text>
                        </Box>
                    </Tab>
                ))}
            </BottomNav>
        </>
    )
}

export default MobileNav
