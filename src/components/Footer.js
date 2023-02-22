import { Link } from 'gatsby';
import React from 'react';
import Container from './Container';
import { FooterCopyright } from './FooterCopyright';

export const Footer = () => {
  const links = [
    {
      name: 'Publication Details',
      pathname: '/publication-details',
    },
    {
      name: 'Privacy Policy',
      pathname: '/privacy-policy',
    },
    {
      name: 'LinkedIn',
      pathname: '#',
    },
  ];
  return (
    <footer className="h-screen bg-red-500 flex flex-col">
      <Container className={'bg-blue-500 flex-1'}>sdfsdf</Container>
      <FooterCopyright />
    </footer>
  );
};
