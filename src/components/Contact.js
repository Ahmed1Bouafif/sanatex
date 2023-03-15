import { toUpper } from 'lodash';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from './Container';
import FormInput from './FormInput';
import { Section } from './Section';
import { WriteUsForm } from './WriteUsForm';
import { OpenPosForm } from './OpenPosForm';

const Contact = () => {
  const forms = [WriteUsForm, OpenPosForm];
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      label: 'write us',
    },
    {
      label: 'open positions',
    },
  ];

  const handleChangeTab = (idx) => {
    setActiveTab(idx);
  };
  return (
    <div className="bg-black text-white  py-20 ">
      <Container className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2">
        <div className="bg-red-30s0 col-span-3 mb:4">
          <p className="text-white text-center text-5xl md:text-left md:text-7xl lg:text-8xl font-heading ">
            Get in touch with us
          </p>
        </div>
        <div className="bg-gray-6s00 row-span-2 flex flex-col gap-1 col-span-2 md:px-16 h-[550px]">
          <div className="flex w-full mt-8 md:mt-0">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={(e) => handleChangeTab(idx)}
                className={`w-full transition-all ${
                  activeTab === idx
                    ? 'text-black bg-white'
                    : 'text-white bg-black'
                }   font-semibold py-4  sm:text-sm md:text-sm lg:text-base `}
              >
                {toUpper(tab.label)}
              </button>
            ))}
          </div>
          {/* {forms[activeTab]()} */}
          {activeTab === 0 ? <WriteUsForm /> : <OpenPosForm />}
        </div>
        <div className="bg-blue-30s0 col-span-3 mt-8 md:mt-0">
          <div className="text-white h-full flex justify-center items-center">
            other contact info
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
