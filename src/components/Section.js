import React from "react"
import Container from "./Container"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { capitalize } from "lodash"

export const Section = ({ children, bg = false, title }) => {
  const { t } = useTranslation()
  return (
    <div className={`relative overflow-hidden ${bg ? "bg-blue-600" : "bg-white"} pt-20 pb-28 sm:py-32 md:py-24 md:pbx-10 `}>
      {/* <img
        src="/services1.svg"
        className="object-cover absolute top-0 left-0 w-full h-full"
      /> */}
      <Container className={"flex flex-col gap-8 "}>
        <motion.h2 initial={{ x: -200, opacity: 0 }} whileInView={{ x: 1, opacity: 1 }} transition={{ duration: 0.5 }} className={`z-10 text-center lg:text-left font-display text-4xl tracking-tight sm:text-5xl md:text-5xl ${bg && "text-white"}`}>
          {/* {capitalize(t(title))} */}
          {title}
          <p className="text-lg mt-4 font-heading">Entdecken Sie eine Fülle von Dienstleistungen.</p>
        </motion.h2>
        {children}
      </Container>
    </div>
  )
}
