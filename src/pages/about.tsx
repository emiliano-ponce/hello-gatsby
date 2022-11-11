import React from 'react'
import { HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Heading, Markdown, Paragraph } from 'grommet'

import Seo from '../components/Seo'

const About = () => (
    <>
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
                page. And the site should be mobile friendly!
                <br />
                <br />I had fun making this. If I had more time I would probably
                add some error handling, more tests, as well as a more detailed
                view for the movies. You can find the source code on my{' '}
                <Markdown style={{ display: 'inline' }}>
                    [github](https://github.com/emiliano-ponce/hello-gatsby)
                </Markdown>
            </Paragraph>
        </Box>
        <Box as="aside" margin="auto" align="center" width="large">
            <Heading>Credits</Heading>
            <Paragraph>
                Heading Photo by{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://unsplash.com/@imnoom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                    Noom Peerapong
                </a>{' '}
                on{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://unsplash.com/s/photos/movie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                    Unsplash
                </a>
            </Paragraph>
            <Paragraph>
                Movie data sourced from
                <Box height="small" width="small">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.themoviedb.org"
                    >
                        <StaticImage
                            objectFit="contain"
                            src="../images/tmdb-logo.svg"
                            alt="The Movie Database (TMDB) brand logo"
                        />
                    </a>
                </Box>
            </Paragraph>
        </Box>
    </>
)

export const Head: HeadFC = () => <Seo pageTitle="About Me" />

export default About
