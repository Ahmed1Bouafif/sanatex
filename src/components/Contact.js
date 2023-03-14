import { toUpper } from 'lodash';
import React, { useState } from 'react';
import Container from './Container';
import FormInput from './FormInput';
import { Section } from './Section';

const Contact = () => {
  const openPosInputs = [
    {
      label: 'gender (Mr/Mrs)',
      name: 'contact-2-gender',
      type: 'select',
      required: false,
    },
    {
      label: 'Name',
      name: 'contact-2-name',
      type: 'text',
      required: true,
    },
    {
      label: 'email',
      name: 'contact-2-email',
      type: 'email',
      required: true,
    },
    {
      label: 'Phone',
      name: 'contact-2-phone',
      type: 'text',
      required: false,
    },
    {
      label: 'CV',
      name: 'contact-2-cv',
      type: 'file',
      required: true,
    },
    {
      label: 'cover letter',
      name: 'contact-2-cl',
      type: 'file',
      required: true,
    },
    {
      label: 'Message',
      name: 'contact-2-message',
      type: 'textarea',
      required: false,
    },
  ];

  const writeUsInputs = [
    {
      label: 'First name',
      name: 'contact-1-first',
      type: 'text',
      required: true,
    },
    {
      label: 'Last name',
      name: 'contact-1-last',
      type: 'text',
      required: true,
    },
    {
      label: 'email',
      name: 'contact-1-email',
      type: 'email',
      required: true,
    },
    {
      label: 'Phone',
      name: 'contact-1-phone',
      type: 'text',
      required: false,
    },
    {
      label: 'City',
      name: 'contact-1-city',
      type: 'text',
      required: false,
    },
    {
      label: 'Street',
      name: 'contact-1-street',
      type: 'text',
      required: false,
    },
    {
      label: 'Message',
      name: 'contact-1-message',
      type: 'textarea',
      required: false,
    },
  ];

  const forms = [writeUsInputs, openPosInputs];
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
    <div className="bg-black text-white  py-20">
      <Container className="grid grid-cols-5 grid-rows-2">
        <div className="bg-red-30s0 col-span-3">
          <p className="text-white text-8xl font-heading">
            Get in touch with us
          </p>
        </div>
        <div className="bg-gray-6s00 row-span-2 flex flex-col gap-1 col-span-2 px-16">
          <div className="flex w-full">
            {tabs.map((tab, idx) => (
              <button
                onClick={(e) => handleChangeTab(idx)}
                className={`w-full transition-all ${
                  activeTab === idx
                    ? 'text-black bg-white'
                    : 'text-white bg-black'
                }   font-semibold py-4 `}
              >
                {toUpper(tab.label)}
              </button>
            ))}
          </div>
          <form className="flex flex-col bg-grseen-500  gap-4">
            <div className="flex flex-col gap-2  bg-rsed-300 items-center">
              {forms[activeTab]?.map((input, idx) => (
                <FormInput key={input.name} {...input} />
              ))}
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-white px-6 py-3 text-black font-semibold rounded-sm font-heading"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="bg-blue-30s0 col-span-3">
          <div className="text-white h-full flex justify-center items-center">
            other contact info
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
