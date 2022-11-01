import React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const About = () => (
    <Layout pageTitle="About Me">
        <article>
            <p>
                Hello! My name is Emiliano Ponce. I created this site to try my
                hand at working with Gatsby and show off some of my development
                skills, I hope you like it!
            </p>
        </article>
    </Layout>
)

export const Head: HeadFC = () => <Seo pageTitle="About Me" />

export default About
