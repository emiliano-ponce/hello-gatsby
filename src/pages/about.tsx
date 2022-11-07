import React from 'react'
import { HeadFC } from 'gatsby'
import { Box, Markdown, Paragraph } from 'grommet'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import Layout from '../components/Layout'

const About = () => (
    <Layout>
        <Box as="article" margin="auto" align="center" width="large">
            <StaticImage
                objectFit="contain"
                src="../images/me.jpg"
                alt="Emiliano, software developer extraordinaire."
            />
            <Paragraph fill>
                Hello! My name is Emiliano Ponce. I created this site to try my
                hand at working with Gatsby and show off some of my development
                skills, I hope you like it!
                <br />
                <br />
                You should be able to search for and pin movies to the home
                page. And the site should be mobile friendly! (on Chrome)
                <br />
                <br />
                I had fun making this. If I had more time I would probably
                add some error handling, more tests, as well as a more detailed
                view for the movies. You can find the source code on my{' '}
                <Markdown style={{ display: 'inline' }}>
                    [github](https://github.com/emiliano-ponce/hello-gatsby)
                </Markdown>
            </Paragraph>
        </Box>
    </Layout>
)

export const Head: HeadFC = () => <Seo pageTitle="About Me" />

export default About
