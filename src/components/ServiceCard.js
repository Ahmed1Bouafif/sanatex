import React from 'react';
import { Link } from 'gatsby';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'lodash';

export const ServiceCard = ({ name, title, icon: Icon }) => {
  console.log(name);
  const { t } = useTranslation();
  return (
    <motion.div className="relative bg-blue-40s0  flex flex-col lg:p-8 p-16 gap-10 hover: transition-all rounded-[4px] overflow-hidden group cursor-pointer justify-between h-full min-w-[250px]">
      <div className="service-card absolute h-full w-full top-0 left-0 bg-gradient-to-br  bg-blue-500 group-hover:opacity-100 opacity-0 z-0 transition-all "></div>
      <div className="flex justify-center lg:justify-start z-10">
        <Icon className=" w-1/3 group-hover:stroke-white text-black transition-all" />
      </div>
      <div className="flex flex-col gap-2 z-10 font-semibold ">
        <h3 className="text-center lg:text-start text-2xl sm:text-lg group-hover:text-white text-black">
          {capitalize(t(name))}
        </h3>
        <Link
          to="#"
          className=" justify-between  items-center hidden lg:flex text-black transition-all"
        >
          <h4 className="group-hover:text-white text-black">Learn more</h4>{' '}
          <span>
            <ArrowUpRightIcon className="h-5 w-5 group-hover:stroke-white text-black" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};
