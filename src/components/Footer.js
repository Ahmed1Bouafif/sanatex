import { Link } from 'gatsby';
import React from 'react';
import { Button } from './Button';
import Container from './Container';
import { FooterCopyright } from './FooterCopyright';
import { Logo } from './Logo';
import MapContainer from './MapContainer';

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
    <footer className="h-screesn flex flex-col pb-10 ">
      <div
        // id="x"
        className="flex flex-col gap-40 justify-between px-4 pt-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative"
      >
        <div className="grid gap-16 row-gap-10 mb-8 ">
          {/* lg:grid-cols-6 */}

          <div className="md:max-w-md lg:col-span-2">
            <Link
              to="/"
              aria-label="Go home"
              title="Company"
              className="  md:max-w-[200px] lg:max-w-[300px] max-w-[200px] min-w-[150px]"
            >
              <div className="bg-bluse-500 bg-black p-4 rounded-[4px]">
                <img
                  src="/3131.png"
                  alt=""
                  className="bg-grseen-500 w-screen"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
