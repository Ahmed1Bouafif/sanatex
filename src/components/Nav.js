import { Link } from "gatsby"
import React from "react"
import { useNavContext } from "../context/store"
import { navLinks } from "../data/nav-links"
import { Button } from "./Button"
import { NavButton } from "./NavButton"
import { NavLink } from "./NavLink"
import { NavListMobile } from "./NavListMobile"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
export const Nav = () => {
  const { languages, changeLanguage } = useI18next()
  const { t } = useTranslation()
  const { expandNav, setExpandNav } = useNavContext()
  return (
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <Link className="font-bold hs-10" to="/">
          Sanate<span className="font-bold text-blue-500">X</span>
        </Link>
        <div className="hidden md:flex md:gap-x-4">{navLinks.map(({ name, pathname }) => name !== "Home" && <NavLink key={name} name={name} pathname={pathname} />)}</div>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-8">
        <div class="relative inline-block w-12">
          <select id="underline_select" class="block py-2.5 px-1 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            {languages.map((lang) => {
              ;<option
                onClick={(e) => {
                  e.preventDefault()
                  changeLanguage(lang)
                  console.log("00000000000000000000", lang)
                }}
                value="lang"
              >
                {lang}
              </option>
            })}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fill-rule="evenodd" d="M17.293 6.707a1 1 0 00-1.414 0L10 12.586 4.707 7.293a1 1 0 00-1.414 1.414l5.656 5.657a1 1 0 001.414 0l5.656-5.657a1 1 0 000-1.414z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <Button to="#">Get in touch</Button>
        <NavButton />
        {expandNav ? (
          <>
            <div className="fixed inset-0 bg-slate-300/50 opacity-100 md:hidden"></div>
            <NavListMobile />
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  )
}
