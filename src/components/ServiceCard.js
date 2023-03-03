import React from 'react';
import { Link } from 'gatsby';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
export const ServiceCard = () => {
  return (
    <div className=" relative bg-blue-40s0  flex flex-col p-8 gap-10 hover: transition-all rounded-[4px] overflow-hidden group ">
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-500 group-hover:opacity-100 opacity-0 z-0 transition-all"></div>
      <div className="bg-green-4s00 z-10">
        <GlobeAltIcon className="w-1/2 hover:text-white" />
      </div>
      <div className="flex flex-col gap-2 z-10">
        <h3 className="font-bold text-2xl group-hover:text-white">
          Protect internet access
        </h3>
        <Link className="flex justify-between font-bold items-center ">
          <h4 className="group-hover:text-white">Learn more</h4>{' '}
          <span>
            <ArrowUpRightIcon className="h-5 w-5 " />
          </span>
        </Link>
      </div>
    </div>
  );
};
