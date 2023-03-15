import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import {
  ArrowUpRightIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'lodash';

export const ServiceCard = ({
  name,
  title,
  idx,
  description,
  icon: Icon,
  setActiveService,
  activeService,
}) => {
  const { t } = useTranslation();
  const isActive = idx === activeService;

  useEffect(() => {
    if (isActive) console.log(idx, 'is active');
  }, [activeService]);
  return (
    <>
      <motion.div
        onClick={(e) => {
          console.log(idx, activeService);
          setActiveService((id) => {
            // if (!id) return idx;
            if (id === idx) return null;
            return idx;
          });
        }}
        className="relative  flex flex-col p-10 lsg:p-8 md:p-8 gap-6 hover: transition-all rounded-[4px] overflow-hidden group cursor-pointer lg:justify-between h-full min-w-[240px] "
      >
        <div className="service-card absolute h-full w-full top-0 left-0 bg-gradient-to-br  bg-blue-500 group-hover:opacity-100 opacity-0 z-0 transition-all "></div>
        <div className="flex justify-center lg:justify-start z-10">
          <Icon className=" max-w-[70px] group-hover:stroke-white text-black transition-all" />
        </div>
        <div className="flex flex-col gap-2 z-10 font-semibold ">
          <h3 className="text-center lg:text-start text-2xl sm:text-lg group-hover:text-white text-black">
            {capitalize(t(name))}
          </h3>
          <Link
            to="#"
            className="justify-center lg:justify-between flex items-center  text-black transition-all "
          >
            <h4 className="group-hover:text-white text-black hidden lg:flex">
              Learn more
            </h4>{' '}
            <span className="">
              {/* <ArrowUpRightIcon className="h-5 w-5 group-hover:stroke-white text-black" /> */}
              <ChevronDoubleDownIcon
                className={`h-6 w-6  group-hover:stroke-white text-black ${
                  isActive ? 'rotate-180' : 'rotate-0'
                } transition-all`}
              />
            </span>
          </Link>
        </div>
      </motion.div>
      {isActive && (
        <div className="bg-black  md:hidden w-full text-white p-4">
          {description}
        </div>
      )}
    </>
  );
};
