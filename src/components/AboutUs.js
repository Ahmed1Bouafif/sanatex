import React from "react"
import Container from "./Container"
import { Section } from "./Section"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { capitalize } from "lodash"
import { useTranslation } from "react-i18next"

export const AboutUs = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const isAboutPage = location.pathname.includes("/about")
  return (
    <div className={`relative soverflow-hidden bg-black py-2 sm:py-32 md:py-64 md:pbx-10`}>
      {/* <img
        className="opacity-20 z-0 left-0 top-0 absolute h-full object-center object-cover w-full"
        src="/banner1.png"
      /> */}
      <Container className={"flex flex-col gap-16"}>
        <motion.h2 initial={{ x: -200, opacity: 0 }} whileInView={{ x: 1, opacity: 1 }} transition={{ duration: 0.5 }} className={`z-10 text-center md:text-left font-display text-4xl tracking-tight sm:text-5xl md:text-5xl text-white`}>
          {/* {capitalize(t("about"))} */} Über uns
        </motion.h2>
        <div className="flex flex-col gap-4">
          <div className="z-10 grid grid-cols-1 text-xl md:grid-cols-2">
            <p className="text-white z-10">{/* {capitalize(t("aboutDescription"))} */} Sanatex GmbH gilt als modernes und dynamisches Unternehmen, welches sich seit der Gründung im Jahr 2021 schweizweit für den Ausbau in der Telekommunikationsbranche engagiert. Wir sind stets daran interessiert die Schweizer Netzwerke auf das neuste Level zu treiben. Deshalb setzen wir auf Innovation, Präzision und Verbundenheit. Unser Fachpersonal bietet ein breites Angebot in den Bereichen Kupferleitungen (FTTS, FTTB & Daily Business), LWL-Leitungen (FTTS, FTTB, FTTO, FTTH & Daily Business) und dem Tiefbau/Kabelzug an. Durch unsere hoch qualifizierten Mitarbeiter bieten wir unseren Kunden höchste Qualität und eine vollumfängliche Betreuung.</p>
          </div>
          {!isAboutPage && (
            <Link to="/about" className="relative w-fit group cursor-pointer">
              <span className="text-white">mehr lesen</span> <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
            </Link>
          )}
        </div>
      </Container>
    </div>
  )
}
