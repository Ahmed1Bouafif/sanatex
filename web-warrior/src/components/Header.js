import React from 'react';

export default function Header() {
  return (
    <header className="bg-transparent flex justify-between items-center text-white ">
      <div>Logo</div>
      <div className="flex gap-4">
        <select>
          <option value="en">EN</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );
}
