import React from 'react';
import Container from './Container';
import FormInput from './FormInput';
import { Section } from './Section';

const Contact = () => {
  const inputs = [
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
  return (
    <div className="bg-black text-white  py-24">
      <Container className="grid grid-cols-5 grid-rows-2">
        <div className="bg-red-30s0 col-span-3">
          <p className="text-white text-8xl font-heading">
            Get in touch with us
          </p>
        </div>
        <div className="bg-gray-6s00 row-span-2 col-span-2">
          <form className="flex flex-col bg-grseen-500 px-16 gap-4">
            <div className="flex flex-col gap-4  bg-rsed-300 items-center">
              {inputs.map((input, idx) => (
                <FormInput key={input.name} {...input} />
              ))}
            </div>
            <div className="flex justify-start">
              <button className="bg-white px-6 py-3 text-black font-semibold rounded-sm font-heading">
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
