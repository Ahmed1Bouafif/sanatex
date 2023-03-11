import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import {
  ArrowUpRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const ServiceCard = ({ title, icon: Icon }) => {
  return (
    <motion.div className="relative bg-blue-40s0  flex flex-col lg:p-8 p-16 gap-10 hover: transition-all rounded-[4px] overflow-hidden group cursor-pointer justify-between h-full min-w-[250px]">
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-500 group-hover:opacity-100 opacity-0 z-0 transition-all "></div>
      <div className="flex justify-center lg:justify-start z-10">
        <Icon className=" w-1/3 group-hover:stroke-white text-black" />
      </div>
      <div className="flex flex-col gap-2 z-10 font-semibold ">
        <h3 className="text-center lg:text-start text-2xl sm:text-lg group-hover:text-white text-black">
          {title}
        </h3>
        <Link className=" justify-between  items-center hidden lg:flex text-black">
          <h4 className="group-hover:text-white text-black">Learn more</h4>{' '}
          <span>
            <ArrowUpRightIcon className="h-5 w-5 group-hover:stroke-white text-black" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};
