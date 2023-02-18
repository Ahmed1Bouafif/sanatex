import { Link } from 'gatsby';
import React from 'react';
import Container from './Container';

export default function Header() {
  return (
    <header className="text-white h-3 w-full absolute left-0 z-10 top-12">
      <Container className="flex bg-greens-500 justify-between items-center">
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          Logo
        </Link>
        <div className="flex gap-4">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </Container>
    </header>
  );
}
