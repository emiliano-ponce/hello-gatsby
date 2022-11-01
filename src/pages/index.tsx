import React from 'react'
import { HeadFC, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const Index = () => {
    const data = useStaticQuery(graphql`
        query {
            allTmdbMoviePopular {
                totalCount
                edges {
                    node {
                        tmdbId
                        title
                        vote_average
                        overview
                        poster_path {
                            original
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout pageTitle="Home">
            <section>Search goes here</section>

            <section>{data.allTmdbMoviePopular.totalCount}</section>

            <section>pinned movies</section>
        </Layout>
    )
}

export const Head: HeadFC = () => <Seo pageTitle="Home" />

export default Index
