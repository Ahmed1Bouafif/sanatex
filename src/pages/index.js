import * as React from "react"
import { AboutUs } from "../components/AboutUs"
import Container from "../components/Container"
import { Hero } from "../components/Hero"
import Layout from "../components/Layout"
import { Section } from "../components/Section"
import { Services } from "../components/Services"
import { graphql } from "gatsby"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
    </>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
