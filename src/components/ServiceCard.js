import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import {
  ArrowUpRightIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'lodash';
import { Collapse } from 'react-collapse';

export const ServiceCard = ({
  name,
  title,
  idx,
  description,
  icon: Icon,
  setActiveService,
  activeService,
  setPrev,
}) => {
  const { t } = useTranslation();
  const isActive = activeService && idx === activeService;

  useEffect(() => {
    if (isActive) console.log(idx, 'is active');
  }, [activeService]);
  return (
    <>
      <motion.div
        onClick={(e) => {
          console.log(idx, activeService);
          setActiveService((id) => {
            if (id) {
              setPrev(id);
            }
            return id === idx ? null : idx;
          });
        }}
        className="relative  flex flex-col z-10 p-10 lsg:p-8 md:p-8 gap-6 hover: transition-all roundsed-[4px] overflow-hidden group cursor-pointer gsap-10 lg:justify-between h-full min-w-[240px] "
      >
        <div
          className={` absolute h-full w-full top-0 left-0 group-hover:opacity-100 opacity-0 z-0 transition-all ${
            isActive ? 'bg-black' : 'service-card'
          }`}
        ></div>
        <div className="flex justify-center lg:justify-start z-10">
          <Icon className=" z-0 max-w-[100px] group-hover:stroke-white text-black transition-all" />
        </div>
        <div className="flex flex-col gap-5  sm:gap-2 z-10 font-semibold ">
          <h3 className="text-center lg:text-start text-2xl sm:text-lg group-hover:text-white text-black">
            {capitalize(t(name))}
          </h3>
          <button
            to="#"
            className="justify-center lg:justify-between flex items-center  text-black transition-all "
          >
            <h4 className="group-hover:text-white text-black hidden lg:flex">
              Learn more
            </h4>{' '}
            <span>
              {/* <ArrowUpRightIcon className="h-5 w-5 group-hover:stroke-white text-black" /> */}
              <ChevronDoubleDownIcon
                className={`h-6 w-6 justify-self-end group-hover:stroke-white text-black ${
                  isActive ? 'rotate-180' : 'rotate-0'
                } transition-all`}
              />
            </span>
          </button>
        </div>
      </motion.div>

      <Collapse isOpened={isActive}>
        <div className={`bg-black text-white p-8 font-heading sm:hidden`}>
          {description}
        </div>
      </Collapse>

      {/* <div
        className={`bg-black z-20 md:hidden w-full text-white p-4 origin-top scale-y-0 ${
          isActive ? 'scale-y-100' : ''
        } transition-transform`}
      >
        {description}
      </div> */}
    </>
  );
};
