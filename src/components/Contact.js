import { toUpper } from "lodash"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Container from "./Container"
import FormInput from "./FormInput"
import { Section } from "./Section"
import { WriteUsForm } from "./WriteUsForm"
import { OpenPosForm } from "./OpenPosForm"
import { useFormTabContext } from "../context/store"

const Contact = () => {
  const forms = [WriteUsForm, OpenPosForm]
  const { activeFormTab, setActiveFormTab } = useFormTabContext()
  const tabs = [
    {
      label: "Schreiben Sie uns",
    },
    {
      label: "offene Stellen",
    },
  ]

  const handleChangeTab = (idx) => {
    setActiveFormTab(idx)
  }
  return (
    <div className="bg-black text-white h-full  py-20  mt-20">
      <Container className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2">
        <div className="bg-red-30s0 col-span-3 mb:4">
          <p className="text-white text-center text-5xl md:text-left md:text-7xl lg:text-8xl font-heading ">Nehmen Sie Kontakt mit uns auf</p>
        </div>
        <div className="bg-gray-6s00 row-span-2 flex flex-col gap-1 col-span-2 md:px-16 h-[550px]">
          <div className="flex w-full mt-8 md:mt-0">
            {tabs.map((tab, idx) => (
              <button key={tab.label} onClick={(e) => handleChangeTab(idx)} className={`w-full transition-all ${activeFormTab === idx ? "text-black bg-white" : "text-white bg-black"}   font-semibold py-4  sm:text-sm md:text-sm lg:text-base `}>
                {toUpper(tab.label)}
              </button>
            ))}
          </div>
          {/* {forms[activeTab]()} */}
          {activeFormTab === 0 ? <WriteUsForm /> : <OpenPosForm />}
        </div>
        {/* <div className="bg-blue-30s0 col-span-3 mt-8 md:mt-0 flex items-center justify-center md:justify-start">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 mt-10 md:mt-0">
            <div className="text-center md:text-left">
              <p className="font-semibold tracking-wide text-white">Kategorie</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Nachrichten
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Welt
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Spiele
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Referenzen
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold tracking-wide text-white">Business</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Web
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    eCommerce
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Business
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Unterhaltung
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold tracking-wide text-white">Äpfel</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Medien
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Broschüre
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Gemeinnützig
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Bildung
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Projekte
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold tracking-wide text-white">Kirsche</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Persönlich
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Wiki
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Forum
                  </a>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </Container>
    </div>
  )
}

export default Contact
