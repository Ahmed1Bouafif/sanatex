import React from 'react';

export const Section = ({ children, bg = false }) => {
  return (
    <div
      className={`relative overflow-hidden ${
        bg ? 'bg-blue-600' : 'bg-white'
      } pt-20 pb-28 sm:py-32 md:pt-20 md:pb-10`}
    >
      {children}
    </div>
  );
};
