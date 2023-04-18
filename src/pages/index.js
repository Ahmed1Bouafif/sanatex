import * as React from 'react';
import { AboutUs } from '../components/AboutUs';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import { Services } from '../components/Services';
import '../../i18n';
import { Button } from '../components/Button';
import Container from '../components/Container';
import { TrustedBy } from '../components/TrustedBy';
import Contact from '../components/Contact';
import { SEO } from '../components/seo';
// import { useLocation } from "react-router-dom"
// import {i18next} from "i18next"
const IndexPage = () => {
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
    </Layout>
  );
};

export default IndexPage;
export const Head = () => <SEO />;

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
