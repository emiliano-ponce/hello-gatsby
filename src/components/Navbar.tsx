import React, { useState, useContext } from 'react'
import { Video, Menu } from 'grommet-icons'
import {
    Heading,
    Header,
    Box,
    Nav,
    Anchor,
    Layer,
    Sidebar,
    ThemeContext,
    Grommet,
    grommet,
} from 'grommet'

import GrommetLink from './GrommetLink'
import useIsMobile from '../hooks/useIsMobile'
import useSiteMetadata from '../hooks/useSiteMeta'
import { customTheme } from './Layout'
import { deepMerge } from 'grommet/utils'

const Navbar = () => {
    const { title } = useSiteMetadata()
    const isMobile = useIsMobile()

    return (
        <Header
            pad="medium"
            height="xsmall"
            sticky="scrollup"
            background="brand"
            direction={isMobile ? 'row-reverse' : 'row'}
        >
            <Box flex direction="row" align="center">
                <Heading level={2} margin={{ right: 'small' }}>
                    {title}
                </Heading>
                <Video size={isMobile ? 'medium' : 'large'} />
            </Box>
            {isMobile ? (
                <MobileNav />
            ) : (
                <Nav direction="row">
                    <GrommetLink to="/" label="Home" />
                    <GrommetLink to="/about" label="About" />
                </Nav>
            )}
        </Header>
    )
}

const MobileNav = () => {
    const [show, setShow] = useState(false)
    const toggle = () => setShow(!show)

    return (
        <>
            <Anchor
                onClick={toggle}
                icon={<Menu style={{ verticalAlign: 'middle' }} />}
            />
            {/** Auto theme was not applying here... */}
            <Grommet theme={deepMerge(grommet, customTheme)} themeMode="auto">
                {show && (
                    <Layer
                        style={{ width: '50%' }}
                        position="left"
                        onEsc={toggle}
                        onClickOutside={toggle}
                    >
                        <Sidebar background="background" pad="medium">
                            <Heading level={2}>Navigation</Heading>
                            <Nav>
                                <GrommetLink to="/" label="Home" />
                                <GrommetLink to="/about" label="About" />
                            </Nav>
                        </Sidebar>
                    </Layer>
                )}
            </Grommet>
        </>
    )
}

export default Navbar
