import React from 'react';

export const Section = ({ children, bg = false }) => {
  return (
    <div
      className={`relative overflow-hidden ${
        bg ? 'bg-blue-600' : 'bg-white'
      } pt-20 pb-28 sm:py-32 h-screen`}
    >
      {children}
    </div>
  );
};
