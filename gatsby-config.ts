import type { GatsbyConfig } from 'gatsby'

require('dotenv').config()

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Gatsby Movies',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-tmdb',
            options: {
                apiKey: process.env.GATSBY_API_KEY,
                sessionID: process.env.SESSION_ID,
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Inter`,
                        file: `https://fonts.googleapis.com/css2?family=Inter&display=swap`,
                    },
                ],
            },
        },
    ],
}

export default config
