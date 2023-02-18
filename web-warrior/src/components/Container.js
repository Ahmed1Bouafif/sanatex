import React from 'react';

export default function Container({ children, className }) {
  return (
    <div
      className={`relative px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1500px] ${className}`}
    >
      {children}
    </div>
  );
}
