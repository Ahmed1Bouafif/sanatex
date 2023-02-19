import { Link } from 'gatsby';
import React from 'react';
import NavMenuClose from './NavMenuClose';
import NavMenuList from './NavMenuList';

export default function NavMenu({ openMenu, handleCloseMenu }) {
  return (
    <div
      className={`fixed top-0 ${
        openMenu ? 'right-0' : '-right-[100%]'
      }  z-20 bg-white h-full w-full sm:w-[400px] p-12 flex flex-col justify-between transition-all`}
    >
      <div className="flex justify-between items-center">
        <div className="text-blue-500 text-2xl font-bold">Logo</div>
        <NavMenuClose handleCloseMenu={handleCloseMenu} />
      </div>

      <NavMenuList />

      <div className="border-t-4 border-blue-500 pt-5">
        <Link to={'#'} className="mr-[30px]">
          <span className="text-gray-500 text-lg ">LinkedIn</span>
        </Link>
      </div>
    </div>
  );
}
