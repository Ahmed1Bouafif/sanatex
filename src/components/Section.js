import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';

export const Section = ({ children, bg = false, title }) => {
  return (
    <div
      className={`relative overflow-hidden ${
        bg ? 'bg-blue-600' : 'bg-white'
      } pt-20 pb-28 sm:py-32 md:py-24 md:pbx-10 `}
    >
      <Container className={'flex flex-col gap-8 '}>
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`z-10 text-center md:text-left font-display text-4xl tracking-tight sm:text-5xl md:text-6xl ${
            bg && 'text-white'
          }`}
        >
          {title}
        </motion.h2>
        {children}
      </Container>
    </div>
  );
};
