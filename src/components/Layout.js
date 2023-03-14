import React from 'react';
import '../styles/global.css';
import Header from './Header';
import { Footer } from './Footer';
import Contact from './Contact';
// import { useLocation } from "react-router-dom"
// import { i18next } from "i18next"
export default function Layout({ children }) {
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
      <Header />
      {children}
      <Contact />
      <Footer />
    </>
  );
}
