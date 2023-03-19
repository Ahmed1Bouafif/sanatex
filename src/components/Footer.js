import { Link } from "gatsby"
import React from "react"
import { Button } from "./Button"
import Container from "./Container"
import { FooterCopyright } from "./FooterCopyright"
import { Logo } from "./Logo"

export const Footer = () => {
  const links = [
    {
      name: "Publication Details",
      pathname: "/publication-details",
    },
    {
      name: "Privacy Policy",
      pathname: "/privacy-policy",
    },
    {
      name: "LinkedIn",
      pathname: "#",
    },
  ]
  return (
    <footer className="h-screesn flex flex-col pb-10 ">
      <div className="flex flex-col gap-40 justify-between px-4 pt-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link to="/" aria-label="Go home" title="Company" className="  md:max-w-[200px] lg:max-w-[300px] max-w-[200px] min-w-[150px]">
              <div className="bg-bluse-500 bg-black p-4 rounded-[4px]">
                <img src="/logo.png" alt="" className="bg-grseen-500" />
              </div>
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-800">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              <p className="mt-4 text-sm text-gray-800">Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div className="text-center lg:text-left">
              <p className="font-semibold tracking-wide text-gray-800">Kategorie</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Nachrichten
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Welt
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Spiele
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Referenzen
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-semibold tracking-wide text-gray-800">Business</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Web
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    eCommerce
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Business
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Unterhaltung
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-semibold tracking-wide text-gray-800">Äpfel</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Medien
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Broschüre
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Gemeinnützig
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Bildung
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Projekte
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-semibold tracking-wide text-gray-800">Kirsche</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Persönlich
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Wiki
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterCopyright /> */}
    </footer>
  )
}
