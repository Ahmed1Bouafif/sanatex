import { Link } from 'gatsby';
import React from 'react';
import { Button } from './Button';
import Container from './Container';
import { FooterCopyright } from './FooterCopyright';

export const Footer = () => {
  const links = [
    {
      name: 'Publication Details',
      pathname: '/publication-details',
    },
    {
      name: 'Privacy Policy',
      pathname: '/privacy-policy',
    },
    {
      name: 'LinkedIn',
      pathname: '#',
    },
  ];
  return (
    <footer className="h-screen flex flex-col">
      <div class="flex flex-col gap-40 justify-between px-4 pt-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="md:flex flex flex-col content-center max-w-lg text-center gap-2 md:justify-between md:items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
              <p class="text-lg mb-4">
                MultiNet Communication is the first address for integrated
                solutions in Swiss telecommunications systems.
              </p>
            </div>

            <div className="flex">
              <Button link="/contact">CONTACT US</Button>
            </div>

            {/* <div class="mt-8 md:mt-0 flex justify-center md:justify-end">
              <a
                href="tel:1234567890"
                class="text-lg px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300 mr-4"
              >
                Ecriver-nous
              </a>
              <a
                href="mailto:contact@mynetworkcompany.com"
                class="text-lg px-8 py-3 rounded-full bg-blue-400 text-white hover:bg-blue-300 transition-colors duration-300"
              >
                Poster A Pourvoir
              </a>
            </div> */}
          </div>
        </div>
        <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div class="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              class="inline-flex items-center"
            >
              <svg
                class="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                stroke-linejoin="round"
                stroke-width="2"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12"></rect>
                <rect x="3" y="17" width="7" height="6"></rect>
                <rect x="14" y="1" width="7" height="6"></rect>
                <rect x="14" y="11" width="7" height="12"></rect>
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                SanateX
              </span>
            </a>
            <div class="mt-4 lg:max-w-sm">
              <p class="text-sm text-gray-800">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p class="mt-4 text-sm text-gray-800">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p class="font-semibold tracking-wide text-gray-800">Category</p>
              <ul class="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-semibold tracking-wide text-gray-800">Business</p>
              <ul class="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-semibold tracking-wide text-gray-800">Apples</p>
              <ul class="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-semibold tracking-wide text-gray-800">Cherry</p>
              <ul class="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
};
