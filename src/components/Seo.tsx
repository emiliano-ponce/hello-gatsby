import React, { FC } from 'react'
import useSiteMetadata from '../hooks/useSiteMeta'

interface SeoProps { 
    pageTitle: string
}

const Seo: FC<SeoProps> = ({ pageTitle }) => {
    const { title } = useSiteMetadata()

    return (
        <title>
            {pageTitle} | {title}
        </title>
    )
}

export default Seo
