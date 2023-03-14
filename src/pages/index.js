import * as React from "react"
import { useEffect } from "react"
import { AboutUs } from "../components/AboutUs"
import Container from "../components/Container"
import { Hero } from "../components/Hero"
import Layout from "../components/Layout"
import { Section } from "../components/Section"
import { Services } from "../components/Services"
import { graphql } from "gatsby"
import "../../i18n"
// import { useLocation } from "react-router-dom"
// import {i18next} from "i18next"
export default function Home() {
  // const { search } = useLocation()
  // const obj = new URLSearchParams(search)
  // useEffect(() => {
  //   const lang = obj.get("lang")
  //   if (lang === "en" || lang === "fr") {
  //     i18next.changeLanguage(lang)
  //   }
  // }, [obj.get("lang")])

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
    </>
  )
}

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `
