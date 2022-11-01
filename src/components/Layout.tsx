import React, { FC, ReactNode } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSiteMetadata from '../hooks/useSiteMeta'

interface LayoutProps {
    pageTitle: string | JSX.Element
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
    const { title } = useSiteMetadata()
    
    return (
        <>
            <nav>
                {title} <FontAwesomeIcon icon={faFilm} />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </>
    )
}

export default Layout
