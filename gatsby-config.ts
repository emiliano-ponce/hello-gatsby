import type { GatsbyConfig } from 'gatsby'

require('dotenv').config()

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Gatsby Movies'
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-source-tmdb',
            options: {
                apiKey: process.env.API_KEY,
                sessionID: process.env.SESSION_ID,
            },
        },
    ],
}

export default config
