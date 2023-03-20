import * as React from "react"
import { AboutUs } from "../components/AboutUs"
import { Hero } from "../components/Hero"
import Layout from "../components/Layout"
import { Services } from "../components/Services"
import "../../i18n"
import { Button } from "../components/Button"
import Container from "../components/Container"
import { TrustedBy } from "../components/TrustedBy"
import Contact from "../components/Contact"
import { SEO } from "../components/SEO"
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
    <Layout>
      <Hero />
      {/* <TrustedBy /> */}

      <AboutUs />
      <Services />
      <Contact />

      {/* <Container className="flex justify-center py-10">
        <div className="md:flex flex flex-col content-center max-w-lg text-center gap-2 md:justify-between md:items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-4">
              MultiNet Communication is the first address for integrated
              solutions in Swiss telecommunications systems.
            </p>
          </div>

          <div className="flex">
            <Button link="/contact">CONTACT US</Button>
          </div>
        </div>
      </Container> */}
    </Layout>
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
