import React from 'react';
import Container from './Container';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

export const AboutUs = () => {
  return (
    <div
      className={`relative soverflow-hidden bg-blue-600 py-24 sm:py-32 md:py-64 md:pbx-10`}
    >
      <img
        className="opacity-20 z-0 left-0 top-0 absolute h-full object-center object-cover w-full"
        src="./banner1.png"
      />
      <Container className={'flex flex-col gap-16'}>
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`z-10 text-center md:text-left font-display text-4xl tracking-tight sm:text-5xl md:text-6xl text-white`}
        >
          About us
        </motion.h2>
        <div className="flex flex-col gap-4">
          <div className="z-10 grid grid-cols-1 md:grid-cols-2">
            <p className="text-white z-10">
              As a young, dynamic company, we have been fully committed to
              telecommunications network construction in Switzerland since 2008.
              Since our foundation, we have continuously specialized in the
              corresponding activities and have constantly expanded our range of
              services.
            </p>
          </div>
          {/* first hover effect */}
          <Link to="/about-us" className="relative w-fit group cursor-pointer">
            <span className="text-white">Read more</span>{' '}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </Container>
    </div>
  );
};
