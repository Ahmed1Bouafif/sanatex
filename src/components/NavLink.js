import { Link } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
export const NavLink = ({ name, pathname }) => {
  const { t } = useTranslation()

  return (
    <Link to={pathname} className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
      {t(`${name}`)}
    </Link>
  )
}
