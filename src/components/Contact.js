import React from 'react';
import Container from './Container';
import { Section } from './Section';

const Contact = () => {
  const inputs = [
    {
      label: 'First name',
      name: 'contact-1-first',
      required: true,
    },
    {
      label: 'Last name',
      name: 'contact-1-last',
      required: true,
    },
    {
      label: 'email',
      name: 'contact-1-email',
      required: true,
    },
    {
      label: 'Phone',
      name: 'contact-1-phone',
      required: false,
    },
    {
      label: 'City',
      name: 'contact-1-city',
      required: false,
    },
    {
      label: 'street',
      name: 'contact-1-street',
      required: false,
    },
  ];
  return (
    <div className="bg-black text-white  py-24">
      <Container className="grid grid-cols-2 grid-rows-2">
        <div className="bg-red-30s0">
          <p className="text-white text-8xl font-heading">
            Get in touch with us
          </p>
        </div>
        <div className="bg-gray-600 row-span-2">
          <form className=""></form>
        </div>
        <div className="bg-blue-30s0">
          <div className="text-white h-full flex justify-center items-center">
            other contact info
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
