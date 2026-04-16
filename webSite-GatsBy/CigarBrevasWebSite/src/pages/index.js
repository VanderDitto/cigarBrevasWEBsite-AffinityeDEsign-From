import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Seo from "../components/seo"


const IndexPage = () => (
  <main>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </main>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
