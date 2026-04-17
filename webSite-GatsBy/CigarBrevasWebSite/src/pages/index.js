import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Seo from "../components/seo"


const IndexPage = () => (

  <main className="bg-main">
  <div class="left"></div>
  <div class="right"></div>

  <div className="absolute text-3xl font-bold font-[bungee] font-color[main]"> fentuchinis</div>

</main>

)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () =>
  <>

    <title>Puros Brevas&reg;</title>
    <meta name="description" content="Cigarros Brevas Web Page" />


</>
export default IndexPage
