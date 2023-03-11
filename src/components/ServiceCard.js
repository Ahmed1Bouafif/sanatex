import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import {
  ArrowUpRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const ServiceCard = ({
  title,
  icon: Icon,
  index,
  activeService,
  handleOpen,
  handleClose,
  setActiveService,
}) => {
  const isActive = index === activeService;
  useEffect(() => {
    console.log(index, activeService, isActive);
  });

  const ArrowIcon = isActive ? ArrowUpIcon : ArrowDownIcon;
  return (
<<<<<<< HEAD
    <motion.div className="relative bg-blue-40s0  flex flex-col p-8 gap-10 hover: transition-all rounded-[4px] overflow-hidden group cursor-pointer justify-between h-full min-w-[250px]">
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-500 group-hover:opacity-100 opacity-0 z-0 transition-all"></div>
      <div className="flex justify-center md:justify-start z-10">
        <Icon className="sm:w-2/5 w-1/3 group-hover:stroke-white text-black" />
      </div>
      <div className="flex flex-col gap-2 z-10 font-semibold ">
        <h3 className="text-center md:text-start text-xl sm:text-lg group-hover:text-white text-black">
          {title}
        </h3>
        <Link className=" justify-between  items-center hidden md:flex text-black">
          <h4 className="group-hover:text-white text-black">Learn more</h4>{' '}
          <span>
            <ArrowUpRightIcon className="h-5 w-5 group-hover:stroke-white text-black" />
=======
    <motion.div
      className={`relative bg-blue-40s0  flex flex-col p-8 gap-10 transition-all rounded-[4pxs] ${
        activeService !== null && ' hover:rounded-b-none'
      } ${
        isActive && 'rounded-b-none'
      } overflow-hidden group cursor-pointer justify-between h-full`}
      onClick={
        (e) => {
          activeService === index ? handleClose() : handleOpen(index);
        }
        // setActiveService((active) => (active === index ? null : index))
      }
    >
      <div
        className={`absolute h-full w-full top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-500 group-hover:opacity-100 opacity-0 z-0 transition-all`}
      ></div>
      <div
        className={`absolute h-full w-full top-0 left-0 bg-black opacity-0 ${
          isActive && 'opacity-100'
        } z-0 transition-all`}
      ></div>

      <div className="flex justify-center md:justify-start z-10">
        <Icon
          className={`sm:w-2/5 w-1/3 group-hover:stroke-white ${
            isActive && 'stroke-white'
          }`}
        />
      </div>
      <div className="flex flex-col gap-2 z-10 font-semibold">
        <h3
          className={`text-center md:text-start text-xl sm:text-lg group-hover:text-white ${
            isActive && 'text-white'
          }`}
        >
          {title}
        </h3>
        <Link className=" justify-between  items-center hidden md:flex">
          <h4 className={`group-hover:text-white ${isActive && 'text-white'}`}>
            Learn more
          </h4>{' '}
          <span>
            <ChevronDoubleDownIcon
              className={`h-5 w-5 group-hover:stroke-white transition-all ${
                isActive && 'stroke-white rotate-180 '
              }`}
            />
>>>>>>> e8ed85a8766523a5c9bed8c5a29d8fcfa4f8fd11
          </span>
        </Link>
      </div>
    </motion.div>
  );
};
