import React, { useState } from 'react'
import { Github } from 'grommet-icons'
import { Header, Nav, Text } from 'grommet'

import GrommetLink from './GrommetLink'
import useIsMobile from '../hooks/useIsMobile'
import useSiteMetadata from '../hooks/useSiteMeta'

const Navbar = () => {
    const { title } = useSiteMetadata()
    const isMobile = useIsMobile()

    if (isMobile) return null
    return (
        <Header
            pad="medium"
            direction="row"
            height="xxsmall"
            sticky="scrollup"
            background="#000"
        >
            <Nav direction="row">
                <Text>{title}</Text>
                <GrommetLink to="/" label="Home" />
                <GrommetLink to="/about" label="About" />
            </Nav>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/emiliano-ponce/hello-gatsby"
            >
                <Github />
            </a>
        </Header>
    )
}

export default Navbar
