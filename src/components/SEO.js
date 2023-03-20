import React from "react"
import { Helmet } from "react-helmet"

const seo = {
  title: "Sanatex",
  description: "Sanatex, your partner for planning, realisation and maintenance of wired telecommunication networks.",
}
export const SEO = () => {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
  )
}
