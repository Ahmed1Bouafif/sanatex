import React, { useEffect } from "react"
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { capitalize } from "lodash"
import { Collapse } from "react-collapse"
import { useThemeContext } from "../context/store"

export const ServiceCard = ({ name, title, idx, description, subtitle, icon: Icon, setActiveService, activeService, setPrev }) => {
  const { t } = useTranslation()
  const isActive = activeService && idx === activeService
  const { theme, setTheme } = useThemeContext()

  useEffect(() => {
    // if (isActive) console.log(idx, 'is active');
  }, [activeService])
  return (
    <>
      <motion.div
        onClick={(e) => {
          // console.log(idx, activeService);
          console.log(description)
          setActiveService((id) => {
            if (id) {
              setPrev(id)
            }
            return id === idx ? null : idx
          })
        }}
        className="relative  flex flex-col z-10 p-10 lsg:p-8 md:p-8 gap-6 hover: transition-all roundsed-[4px] overflow-hidden group cursor-pointer gsap-10 lg:justify-between h-full min-w-[240px] "
      >
        <div className={` absolute h-full w-full top-0 left-0 group-hover:opacity-100 opacity-0 z-0 transition-all service-card`}></div>
        {isActive ? <div className={` absolute h-full w-full top-0 left-0 bg-black dark:bg-white z-0 transition-all}`}></div> : ""}

        {/* <div className="flex justify-center lg:justify-start z-10">
          {/* <img src={Icon} alt="" className="max-w-[100px] mx-auto" /> */}
        {/* <Icon className={`z-0 max-w-[100px] group-hover:stroke-white text-black transition-all ${isActive ? "stroke-white" : ""}`} /> */}
        {/* </div>  */}
        <div className="flex flex-col justify-center my-auto gap-5  sm:gap-2 z-10 font-semibold ">
          <h3 className={`text-center mx-auto text-xl sm:text-lg text-black dark:text-white    group-hover:text-white texst-black ${isActive ? "text-white dark:!text-black" : ""} `}>
            {/* {capitalize(t(name))} */}
            {name}
            <br />
            <p className={`text-center mx-auto font-normal text-base mt-5 text-black/80 dark:text-white/80    group-hover:text-white texst-black ${isActive ? "text-white/80 dark:!text-black/80" : ""} `}>{subtitle} </p>
          </h3>
          {/* <button to="#" className="justify-center  flex items-center  text-black transition-all ">
            <h4 className={`group-hover:text-white text-black hidden lg:flex ${isActive ? "text-white" : ""}`}>Mehr lesen</h4>{" "}
            <span>
              {/* <ArrowUpRightIcon className="h-5 w-5 group-hover:stroke-white text-black" /> */}
          {/* <ChevronDoubleDownIcon className={`h-6 w-6 justify-self-end group-hover:stroke-white text-black ${isActive ? "rotate-180 stroke-white" : "rotate-0"} transition-all`} />
            </span>
          </button>  */}
        </div>
      </motion.div>

      <Collapse isOpened={isActive}>
        <div className={`bg-black dark:bg-white dark:text-black text-white p-8 font-heading md:hidden`}>{description}</div>
      </Collapse>
    </>
  )
}
