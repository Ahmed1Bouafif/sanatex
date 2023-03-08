import React from 'react';
import { Link } from 'gatsby';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
export const ServiceCard = ({ title, icon: Icon }) => {
  return (
    <div className="relative bg-blue-40s0  flex flex-col p-8 gap-10 hover: transition-all rounded-[4px] overflow-hidden group cursor-pointer justify-between">
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-500 group-hover:opacity-100 opacity-0 z-0 transition-all"></div>
      <div className="flex justify-center md:justify-start z-10">
        <Icon className="sm:w-2/5 w-1/3 group-hover:stroke-white" />
      </div>
      <div className="flex flex-col gap-2 z-10 font-semibold">
        <h3 className="text-center md:text-start text-xl sm:text-lg group-hover:text-white">
          {title}
        </h3>
        <Link className=" justify-between  items-center hidden md:flex">
          <h4 className="group-hover:text-white">Learn more</h4>{' '}
          <span>
            <ArrowUpRightIcon className="h-5 w-5 group-hover:stroke-white" />
          </span>
        </Link>
      </div>
    </div>
  );
};
